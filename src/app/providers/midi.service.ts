import { Injectable } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/operators';

declare const navigator: any;

/**
 * Provides access to the MIDI device using observables
 */
@Injectable()
export class MidiService {

  constructor() { }

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
}
