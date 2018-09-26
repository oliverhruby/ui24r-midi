import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Device } from '../../models/device.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  devices: Observable<Device[]>;
  profiles: any[];
  inputDevices: any[];
  outputDevices: any[];

  constructor(private store: Store<AppState>) {
    this.devices = this.store.select('devices');
  }

  ngOnInit() {}
}
