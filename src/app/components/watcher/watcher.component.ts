import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Message } from '../../models/message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  messages: Observable<Message[]>;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.messages = this.store.select('messages');
    this.messages.subscribe(data => this.cd.detectChanges());
  }
}
