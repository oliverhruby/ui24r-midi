import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Message } from '../../models/message.model';
import { Command } from '../../models/command.model';
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
    this.messages$ = this.store.pipe(select((state: AppState) => state.messages));
    this.commands$ = this.store.pipe(select((state: AppState) => state.commands));
  }
}
