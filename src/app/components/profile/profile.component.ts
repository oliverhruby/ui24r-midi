import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = {
    'Name': 'Soundcraft Ui24R',
    'Commands': [
      'Channel [x:integer] Phantom [y:bool]',
      'Channel [x:integer] Invert [y:bool]',
      'Channel [x:integer] Volume [y:float]',
      'Channel [x:integer] Mute [y:bool]',
      'Channel [x:integer] Pan [y:float]',
      'Channel [x:integer] Compressor Attack [y:bool]',
      'Channel [x:integer] Compressor Bypass [y:bool]',
      'Channel [x:integer] Compressor Threshold [y:foat]',
      'Channel [x:integer] Compressor Ratio [y:foat]',
      'Channel [x:integer] Compressor Release [y:foat]',
      'Channel [x:integer] Compressor Softknee [y:bool]',
      'Channel [x:integer] Post [y:bool]',
      'Channel [x:integer] Solo [y:bool]',
      'Channel [x:integer] Gain [y:float]',
      'Aux [x:integer] Volume [y:float]',
      'Aux [x:integer] Mute [y:bool]',
      'Fx [x:integer] Volume [y:float]',
      'Fx [x:integer] Mute [y:bool]',
      'Master [x:integer] Volume [y:bool]'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
