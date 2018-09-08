import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
/**
 * Translates the incoming MIDI data to console commands using a device profile
 */
@Injectable()
export class ControllerService {
  profile = {
    "rules": [
      ["1", "SETD^1111"],
      ["2", "SETD^2222"],
      ["3", "SETD^3333"],
      ["4", "SETD^4444"]
    ]
  };

  constructor() { }
  /*constructor(store: Store<any>) {
    // subscribe to MIDI events
    store.select("midi").subscribe(data => function (data) {
      this.translate(data);
    });
  }*/

  /**
   * 
   * @param input Translate the midi data to the console command
   */
  translate(input: any) {
    this.profile.rules.forEach(element => {
      if (input == element[0]) { return element[1]; }
    });
  }



}
