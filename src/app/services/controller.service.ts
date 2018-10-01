import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as CommandActions from './../actions/command.actions';
import { Profile } from '../models/profile.model';
import { Message } from '../models/message.model';

/**
 * Translates the incoming MIDI data to console commands using a device profile
 */
@Injectable()
export class ControllerService {
  profile: Profile;

  constructor(private store: Store<AppState>, private httpClient: HttpClient) {
    this.store
      .select('profiles')
      .subscribe(profiles => (this.profile = profiles[0]));
  }

  /**
   * Translate the midi data to the console command
   * @param input Incoming MIDI message
   */
  translate(message: Message) {
    if (this.profile && this.profile.Events) {
      this.profile.Events.forEach(event => {
        if (message.Data1 === event.Control) {
          console.log('Ui Command: ...');
          this.store.dispatch(
            new CommandActions.Add({ Id: 1, Name: 'Test', Code: '' })
          );
          // this.httpClient.get('http://127.0.0.1/test').subscribe();
        }
      });
    }
  }
}
