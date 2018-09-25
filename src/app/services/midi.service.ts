import { Injectable } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { map, filter, mergeMap, flatMap } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

declare const navigator: any;

/**
 * Provides access to the MIDI device using observables
 */
@Injectable()
export class MidiService {

  constructor() {
  }

  /**
   * Provides an observable list of the connected MIDI input devices
   */
  getInputDevices() {
    return from(navigator['requestMIDIAccess']())
      // convert from iterable
      .pipe(map((midi: any) => Array.from(midi.inputs)))
      // grab just the MIDIInput
      .pipe(map((inputs: any) => inputs[0]));
  }

  /**
   * Provides an observable list of the connected MIDI output devices
   */
  getOutputDevices() {
    return from(navigator.requestMIDIAccess())
      // convert from iterable
      .pipe(map((midi: any) => Array.from(midi.outputs)))
      // grab just the MIDIInput
      .pipe(map((device: any) => device[1]));
  }

  /**
   * Get the state changes of MIDI devices as observable
   */
  getStateStream() {
    const midiAccess$ = from(navigator.requestMIDIAccess());
    const stateStream$ = midiAccess$.pipe(flatMap(access => this.stateChangeAsObservable(access)));
    return stateStream$;
  }

  /**
   * Gets the incoming MIDI message as observable
   */
  getMidiStream() {
    const midiAccess$ = from(navigator.requestMIDIAccess());
    const messages$ = midiAccess$
      // get the first input device
      .pipe(map((midi: any) => midi.inputs.values().next().value))
      // stop if it's undefined
      .pipe(filter(input => input !== undefined))
      // convert the onmidimessage event to observable
      .pipe(flatMap(input => this.midiMessageAsObservable(input)))
      // transform the message to an object
      .pipe(map((message: any) => ({
        /* tslint:disable */ 
        status: message.data[0] & 0xf0,
        /* tslint:enable */
        data: [
          message.data[1],
          message.data[2]
        ],
      })))
      // ignore messages with empty data (for example clock signals)
      .pipe(filter((message: any) => message.data[1] != null));
    return messages$;
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
