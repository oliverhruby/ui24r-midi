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
 * Provides access to the MIDI device using observables
 */
@Injectable()
export class MidiService {
  constructor(private store: Store<AppState>, private zone: NgZone) {}

  /**
   * Listen to state changes in connected devices and update store
   */
  public getDevices() {
    navigator.requestMIDIAccess().then(midi => {
      const devices: Device[] = [];
      for (const input of <any[]>Array.from(midi.inputs.values())) {
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
      .pipe(flatMap(access => this.stateChangeAsObservable(access)))
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
        map((midi: any) =>
          Array.from(midi.inputs.values()).find(
            (a: any) => a.name === deviceName
          )
        ),
        // convert the onmidimessage event to observable
        flatMap(input => this.midiMessageAsObservable(input)),
        // transform the message to an object
        map((message: any) => ({
          Date: new Date(),
          /* tslint:disable */
          Status: message.data[0] & 0xf0,
          /* tslint:enable */
          Data1: message.data[1],
          Data2: message.data[2]
        })),
        // ignore messages with empty data (for example clock signals)
        filter((message: Message) => message.Data1 != null)
      )
      .subscribe((message: Message) => {
        this.zone.run(() => {
          this.store.dispatch(new MessageActions.Add(message));
        });
      });
  }

  private stateChangeAsObservable(midi) {
    console.log(midi);
    const source = new Subject();
    const devices: Device[] = [];
    for (const input of <any[]>Array.from(midi.inputs.values())) {
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
