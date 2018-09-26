import { Device } from './../models/device.model';
import * as DeviceActions from './../actions/device.actions';

// Section 1
const initialState: Device[] = [{
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
    ]
  },
  {
    Name: 'Korg nanoControl',
    Commands: []
  },
  {
    Name: 'Yamaha CP33 Piano',
    Commands: [
      'Note [x:integer] Pressed With Velocity [y:integer]',
      'Zone [x:integer] Volume [y:float]',
      'Modulation [y:float]',
      'Pitch [y:float]'
    ]
  },
  {
    Name: 'Some Other Brick',
    Commands: []
  }
];

// Section 2
export function reducer(state: Device[] = initialState, action: DeviceActions.Actions) {

    // Section 3
    switch (action.type) {
        case DeviceActions.ADD_DEVICE:
            return [...state, action.device];
        default:
            return state;
    }
}
