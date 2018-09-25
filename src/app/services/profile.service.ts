import { Injectable } from '@angular/core';

/**
 * Manages the device profiles
 */
@Injectable()
export class ProfileService {
  profiles = [
    {
      Name: 'SoundCraft Ui24R',
      Commands: [
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
        'Master Volume [y:float]'
      ],
      Events: []
    },
    {
      Name: 'Korg nanoControl',
      Commands: [],
      Events: []
    }  ,
    {
      Name: 'Yamaha CP33 Piano',
      Commands: [
        'Note [x:integer] Pressed With Velocity [y:integer]',
        'Zone [x:integer] Volume [y:float]',
        'Modulation [y:float]',
        'Pitch [y:float]'
      ],
      Events: []
    },
    {
      Name: 'Some Other Brick',
      Commands: []
    }
  ];
  
  rules = [
    ['144', 'SETD^1111'],
    ['176', 'SETD^2222']
  ];

  constructor() {
    
  }

  getProfiles() {
    return this.profiles;
  }
}
