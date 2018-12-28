import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Message } from "../../models/message.model";
import * as MessageActions from "../../actions/message.actions";
import * as WatcherActions from "../../actions/watcher.actions";
import { Observable } from "rxjs";
import { WatcherState } from "../../reducers/watcher.reducer";

@Component({
  selector: "app-watcher",
  templateUrl: "./watcher.component.html",
  styleUrls: ["./watcher.component.scss"]
})
export class WatcherComponent implements OnInit {
  messages$: Observable<Message[]>;
  events$: Observable<string[]>;
  watcher$: Observable<WatcherState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.messages$ = this.store.pipe(
      select((state: AppState) => state.messages)
    );
    this.events$ = this.store.pipe(
      select((state: AppState) => state.connection.events)
    );
    this.watcher$ = this.store.pipe(
      select((state: AppState) => state.watcher)
    );
  }

  clear() {
    this.store.dispatch(new MessageActions.Clear());
  }

  toggleHex() {
    this.store.dispatch(new WatcherActions.ToggleHex());
  }

  toggleDec() {
    this.store.dispatch(new WatcherActions.ToggleDec());
  }

  toggleBin() {
    this.store.dispatch(new WatcherActions.ToggleBin());
  }
}
