import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MidiService } from '../../services/midi.service';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {

  messages: any[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private midiService: MidiService) {
  }

  ngOnInit() {
    this.midiService.getMidiStream().subscribe(message => {
      this.messages.unshift(message);
      this.cd.detectChanges();
      if (this.messages.length > 100) {
        this.messages = this.messages.slice(0, 100);
      }
    });
  }
}
