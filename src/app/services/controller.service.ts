import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as ConnectionActions from './../actions/connection.actions';
import { Profile } from '../models/profile.model';
import { Message } from '../models/message.model';
import { WebsocketService } from './websocket.service';
import { timer, interval } from 'rxjs';

/**
 * Translates the incoming MIDI data to console commands using a device profile
 */
@Injectable()
export class ControllerService {
  profile: Profile;

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient,
    private websocketService: WebsocketService
  ) {
    this.store
      .select('profiles')
      .subscribe(profiles => (this.profile = profiles[0]));

    const ws = websocketService.connect('ws://192.168.0.175');
    ws.subscribe(
      x => {
        this.store.dispatch(new ConnectionActions.MessageReceived(x.data));
      },
      e => {
        console.log('socket error');
      },
      () => {
        this.store.dispatch(new ConnectionActions.Disconnected());
      }
    );
  }

  /**
   * Translate the midi data to the console command
   * @param input Incoming MIDI message
   */
  translate(message: Message) {
    if (this.profile && this.profile.Events) {
      this.profile.Events.forEach(event => {
        if (message.Data1 === event.Control) {
          const data = 'SETD^i.0.mute^val' + (Math.random() > 0.5 ? '1' : '0');
          this.store.dispatch(new ConnectionActions.MessageSent(data));
          // this.httpClient.get('http://127.0.0.1/test').subscribe();
        }
      });
    }
  }
}
