import { Injectable, NgZone } from "@angular/core";
import { AppState } from "./../app.state";
import { from } from "rxjs/internal/observable/from";
import { map, filter, flatMap } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { Store } from "@ngrx/store";
import * as MessageActions from "./../actions/message.actions";
import * as DeviceActions from "./../actions/device.actions";
import { Message } from "../models/message.model";
import { Device } from "../models/device.model";

declare const navigator: any;

/**
 * Provides access to MIDI devices
 */
@Injectable()
export class MidiService {
  constructor(private store: Store<AppState>, private zone: NgZone) {}

  /**
   * Retrieve connected MIDI devices and update the store
   */
  public getDevices() {
    navigator.requestMIDIAccess().then((midiAccess: WebMidi.MIDIAccess) => {
      const devices: Device[] = [];
      for (const input of Array.from(midiAccess.inputs.values())) {
        devices.push(<Device>{ Name: input.name });
      }
      this.zone.run(() => {
        this.store.dispatch(new DeviceActions.Update(devices));
      });
    });
  }

  /**
   * Listen to state changes in connected devices and update store
   */
  public listenToStateChanges() {
    from(navigator.requestMIDIAccess())
      .pipe(
        flatMap((midiAccess: WebMidi.MIDIAccess) =>
          this.stateChangeAsObservable(midiAccess)
        )
      )
      .subscribe((inputs: Device[]) => {
        this.zone.run(() => {
          this.store.dispatch(new DeviceActions.Update(inputs));
        });
      });
  }

  /**
   * Listen to MIDI events and update store
   */
  public listenToDevice(deviceName: string) {
    from(navigator.requestMIDIAccess())
      .pipe(
        // get the first input device
        map((midi: WebMidi.MIDIAccess) => {
          return Array.from(midi.inputs.values()).find(
            (a: any) => a.name === deviceName
          );
        }),
        // convert the onmidimessage event to observable
        flatMap(input => this.midiMessageAsObservable(input)),
        // transform the message to an object
        map((message: WebMidi.MIDIMessageEvent) => {
          /* tslint:disable */
          // status is the first byte.
          const status = message.data[0];
          // command is the four most significant bits of the status byte.
          const command = status >>> 4;
          // channel 0-15 is the lower four bits.
          const channel = (status & 0xf) + 1;
          /* tslint:enable */
          return {
            Date: new Date(),
            Channel: channel,
            Status: status,
            Data1: message.data[1],
            Data2: message.data[2]
          };
        }),
        // ignore messages with empty data (for example clock signals)
        filter((message: Message) => message.Data1 != null)
      )
      .subscribe((message: Message) => {
        this.zone.run(() => {
          this.store.dispatch(new MessageActions.Add(message));
        });
      });
  }

  private stateChangeAsObservable(midi: WebMidi.MIDIAccess) {
    console.log(midi);
    const source = new Subject();
    const devices: Device[] = [];
    for (const input of Array.from(midi.inputs.values())) {
      devices.push(<Device>{ Name: input.name });
    }
    midi.onstatechange = () => source.next(devices);
    return source.asObservable();
  }

  private midiMessageAsObservable(input) {
    const source = new Subject();
    input.onmidimessage = note => source.next(note);
    return source.asObservable();
  }
}
