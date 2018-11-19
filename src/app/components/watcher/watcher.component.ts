import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Message } from '../../models/message.model';
import * as MessageActions from '../../actions/message.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  messages$: Observable<Message[]>;
  events$: Observable<string[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.messages$ = this.store.pipe(select((state: AppState) => state.messages));
    this.events$ = this.store.pipe(select((state: AppState) => state.connection.events));
  }

  clear() {
    this.store.dispatch(new MessageActions.Clear());
  }
}
