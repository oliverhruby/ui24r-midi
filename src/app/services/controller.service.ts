import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import * as ConnectionActions from "./../actions/connection.actions";
import { Profile } from "../models/profile.model";
import { Message } from "../models/message.model";
import { WebsocketService } from "./websocket.service";
import * as ProfileReducer from "../reducers/profile.reducer";
import { Observable, Subject } from "rxjs";

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
    this.store.select("profiles").subscribe(data => console.log(data));

    this.subject = websocketService.connect("ws://192.168.0.175");
    this.subject.subscribe(
      x => {
        this.store.dispatch(new ConnectionActions.MessageReceived(x.data));
      },
      e => {
        console.log("socket error");
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
      this.profile.Rules.forEach(rule => {
        if (message.Data1 === rule.Control) {
          console.log("Rule valid!");
          // tslint:disable-next-line:no-eval
          const val = eval(
            rule.Formula.replace("{x}", message.Data2.toString())
          );
          const data = rule.Command.replace("{y}", val);
          this.store.dispatch(new ConnectionActions.MessageSent(data));
          this.subject.next(<any>data);
        }
      });
    }
  }
}
