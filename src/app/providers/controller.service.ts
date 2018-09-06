import { Injectable } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ControllerService {

  constructor() {
    
  }

  /**
   * Provides an observable list of the connected MIDI input devices
   */
  getInputDevices() {
    return from(navigator['requestMIDIAccess']())
    .pipe(
      // convert from iterable
      map((midi: any) => Array.from(midi.inputs))
    )
   }

  /**
   * Provides an observable list of the connected MIDI output devices
   */
  getOutputDevices() {
    return from(navigator['requestMIDIAccess']())
    .pipe(
      // convert from iterable
      map((midi: any) => Array.from(midi.outputs))
    )
   }
  }
