import { Component, OnInit } from '@angular/core';
import { MidiService } from '../../services/midi.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  profile: any;
  profiles: any[];

  inputDevices: any[];
  outputDevices: any[];

  constructor(
    private midiService: MidiService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
    this.profile = this.profileService.getProfiles()[2];
        
    this.midiService.getInputDevices().subscribe(data => {
      console.log(data);
      this.inputDevices = data;
    });
    this.midiService.getOutputDevices().subscribe(data => {
      console.log(data);
      this.outputDevices = data;
    });
  }
}
