import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MidiService } from '../../providers/midi.service';
import { ControllerService } from '../../providers/controller.service';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {

  messages: any[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private midiService: MidiService,
    private controllerService: ControllerService) {
  }

  ngOnInit() {
    this.midiService.getMidiStream().subscribe(message => {
      this.messages.unshift(message);
      this.cd.detectChanges();
      if (this.messages.length > 10) {
        this.messages = this.messages.slice(0, 10);
      }
    });
  }
}
