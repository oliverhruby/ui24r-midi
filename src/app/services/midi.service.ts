import { Injectable, NgZone } from '@angular/core';
import { AppState } from './../app.state';
import { from } from 'rxjs/internal/observable/from';
import { map, filter, flatMap } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Store } from '@ngrx/store';
// import { interval } from 'rxjs';
import * as MessageActions from './../actions/message.actions';
import * as DeviceActions from './../actions/device.actions';
import { Message } from '../models/message.model';

declare const navigator: any;

/**
 * Provides access to the MIDI device using observables
 */
@Injectable()
export class MidiService {
  constructor(
    private store: Store<AppState>,
    private zone: NgZone
  ) {
    // TODO: remove this random simulator
    // interval(1000).subscribe(val =>
    //   this.store.dispatch(
    //     new MessageActions.Add({
    //       Status: 123,
    //       Data1: Math.floor(Math.random() * 100),
    //       Data2: Math.floor(Math.random() * 100)
    //     })
    //   )
    // );

      this.listenToStateChanges();
      this.listenToMidiEvents();
      this.listenToInputDevices();
  }

  /**
   * Listen to state changes in connected devices and update store
   */
  private listenToStateChanges() {
    from(navigator.requestMIDIAccess())
      .pipe(flatMap(access => this.stateChangeAsObservable(access)))
      .subscribe(access => {
        this.zone.run(() => {
          this.store.dispatch(new DeviceActions.Add({Name: 'Test', Commands: []}));
        });
      });
  }

  /**
   * Listen to MIDI events and update store
   */
  private listenToMidiEvents() {
    const midiAccess$ = from(navigator.requestMIDIAccess());
    const messages$ = midiAccess$
      // get the first input device
      .pipe(map((midi: any) => midi.inputs.values().next().value))
      // stop if it's undefined
      .pipe(filter(input => input !== undefined))
      // convert the onmidimessage event to observable
      .pipe(flatMap(input => this.midiMessageAsObservable(input)))
      // transform the message to an object
      .pipe(
        map((message: any) => ({
          /* tslint:disable */
          Status: message.data[0] & 0xf0,
          /* tslint:enable */
          Data1: message.data[1],
          Data2: message.data[2]
        }))
      )
      // ignore messages with empty data (for example clock signals)
      .pipe(filter((message: Message) => message.Data1 != null))
      .subscribe((message: Message) => {
        this.zone.run(() => {
          this.store.dispatch(new MessageActions.Add(message));
        });
      });
  }

  /**
   * TODO: is this needed? can't we just update the store with the full structure?
   * Listen to the state changes of connected devices and update store
   */
  private listenToInputDevices() {
      from(navigator.requestMIDIAccess())
        // convert from iterable
        .pipe(map((midi: any) => Array.from(midi.inputs)))
        // grab just the MIDIInput
        .pipe(map((inputs: any) => inputs[0]))
        .subscribe((inputs: any) => {
          this.zone.run(() => {
            // this.store.dispatch(....)
            console.log(inputs);
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
