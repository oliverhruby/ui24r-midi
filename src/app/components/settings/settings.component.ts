import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { AppState } from '../../app.state';
import { Device } from '../../models/device.model';
import * as ProfileActions from '../../actions/profile.actions';
import * as ProfileReducer from '../../reducers/profile.reducer';


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
    this.profiles = this.store.select('profiles').pipe(select(ProfileReducer.selectAll));
    // this.store.pipe(select(ProfileReducer.selectAll));
    this.inputDevices = this.store.select('devices');
  }

  ngOnInit() {}

  onChange(e) {
    this.store.dispatch(new ProfileActions.SelectProfile(this.selectedValue));
  }
}
