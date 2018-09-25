import { Injectable } from '@angular/core';
import { MidiService } from './midi.service';
import { HttpClient } from '@angular/common/http';

/**
 * Translates the incoming MIDI data to console commands using a device profile
 */
@Injectable()
export class ControllerService {
  profile = {
    rules: [
      ['144', 'SETD^1111'],
      ['176', 'SETD^2222']
    ]
  };

  constructor(
    private midiService: MidiService,
    private httpClient: HttpClient
  ) {
    this.midiService.getMidiStream()
      .subscribe(message => this.translate(message));
  }

  /**
   * Translate the midi data to the console command
   * @param input Incoming MIDI message
   */
  translate(input) {
    this.profile.rules.forEach(element => {
      if (input.status === element[0]) {
        console.log(input.status + ',' + input.data[0] + ',' + input.data[1] + ' ==> ' + element[1]);
        this.httpClient.get('http://127.0.0.1/test').subscribe();
      }
    });
  }
}
