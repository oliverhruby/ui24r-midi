import { Component, OnInit } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Device } from '../../models/device.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  devices: Observable<Device[]>;

  constructor(private store: Store<AppState>) { 
    this.devices = store.select('devices');
  }

  ngOnInit() {
  }

}
