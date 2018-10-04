import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { AppState } from '../../app.state';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectedValue: Profile;
  profiles: Observable<Profile[]>;
  inputDevices: Observable<Device[]>;

  constructor(private store: Store<AppState>) {
    this.profiles = this.store.select('profiles');
    this.inputDevices = this.store.select('devices');
  }

  ngOnInit() {}
}
