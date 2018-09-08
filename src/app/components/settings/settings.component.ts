import { Component, OnInit } from '@angular/core';
import { MidiService } from '../../providers/midi.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  inputDevices: any[];
  outputDevices: any[];

  constructor(private midiService: MidiService) {

  }

  ngOnInit() {
    this.midiService.getInputDevices().subscribe((data) => {
      console.log(data);
      this.inputDevices = data;
    });
    this.midiService.getOutputDevices().subscribe((data) => {
      console.log(data);
      this.outputDevices = data;
    });
  }

}
