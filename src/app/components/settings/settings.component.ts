import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../providers/controller.service';
import { resolve } from 'dns';

export class Device
{
  name: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  inputDevices: any[];
  outputDevices: any[];

  constructor(private controllerService: ControllerService) {
    
  }

  ngOnInit() {
    let me = this;
    this.controllerService.getInputDevices().subscribe((data) => {
      console.log(data);
      me.inputDevices = data;
    });
    this.controllerService.getOutputDevices().subscribe((data) => {
      console.log(data);
      me.outputDevices = data;
    });
  }

}
