import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Message } from '../../models/message.model';
import { Command } from '../../models/command.model';
import { Profile } from '../../models/profile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  messages$: Observable<Message[]>;
  commands$: Observable<Command[]>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.messages$ = this.store.select((state: AppState) => state.messages);
    this.commands$ = this.store.select((state: AppState) => state.commands);
  }
}
