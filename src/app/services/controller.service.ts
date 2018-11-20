import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import * as ConnectionActions from './../actions/connection.actions';
import { Profile } from '../models/profile.model';
import { Message } from '../models/message.model';
import { WebsocketService } from './websocket.service';
import * as ProfileReducer from '../reducers/profile.reducer';
import { Observable, Subject } from 'rxjs';

/**
 * Translates the incoming MIDI data to commands using a device profile
 */
@Injectable()
export class ControllerService {
  profileState$: Observable<ProfileReducer.ProfilesState>;
  profiles$: Observable<Profile[]>;
  profile: Profile;
  subject: Subject<MessageEvent>;

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient,
    private websocketService: WebsocketService
  ) {
    this.profileState$ = this.store.select('profiles');
    this.profiles$ = this.profileState$.pipe(select(ProfileReducer.selectAll));
    this.profiles$.subscribe(data => this.profile = data[0]);

    this.subject = websocketService.connect('ws://192.168.0.175');
    this.subject.subscribe(
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
    if (this.profile) {
      this.profile.Events.forEach(event => {
        if (message.Data1 === event.Control) {
          // TODO: proper logic !!!
          const data = '3:::SETD^i.0.mix^' + 1 / 127 * message.Data2;
          this.store.dispatch(new ConnectionActions.MessageSent(data));
          this.subject.next(<any> data);
        }
      });
    }
  }
}
