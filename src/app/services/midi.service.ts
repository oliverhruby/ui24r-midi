import { Injectable, NgZone } from '@angular/core';
import { AppState } from './../app.state';
import { from } from 'rxjs/internal/observable/from';
import { map, filter, flatMap } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Store } from '@ngrx/store';
import * as MessageActions from './../actions/message.actions';
import * as DeviceActions from './../actions/device.actions';
import { Message } from '../models/message.model';

declare const navigator: any;

/**
 * Provides access to the MIDI device using observables
 */
@Injectable()
export class MidiService {
  constructor(private store: Store<AppState>, private zone: NgZone) {
    this.listenToStateChanges();
    this.listenToMidiEvents();
  }

  /**
   * Listen to state changes in connected devices and update store
   */
  private listenToStateChanges() {
    from(navigator.requestMIDIAccess())
      .pipe(
        flatMap(access => this.stateChangeAsObservable(access)),
        filter((device: any) => device.port.type === 'input')
      )
      .subscribe((access: any) => {
        this.listenToMidiEvents();
        this.zone.run(() => {
          // console.log(access);
          this.store.dispatch(
            new DeviceActions.Update([{ Name: access.port.name }])
          );
        });
      });
  }

  /**
   * Listen to MIDI events and update store
   */
  private listenToMidiEvents() {
    // navigator.requestMIDIAccess().then(data => console.log(data.inputs.values().next().value));
    from(navigator.requestMIDIAccess())
      .pipe(
        // get the first input device
        map((midi: any) => midi.inputs.values().next().value),
        // stop if it's undefined
        filter(input => input !== undefined),
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
          // console.log(message);
          this.store.dispatch(new MessageActions.Add(message));
        });
      });
  }

  private stateChangeAsObservable(midi) {
    const source = new Subject();
    midi.onstatechange = event => source.next(event);
    return source.asObservable();
  }

  private midiMessageAsObservable(input) {
    const source = new Subject();
    input.onmidimessage = note => source.next(note);
    return source.asObservable();
  }
}
