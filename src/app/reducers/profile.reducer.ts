import { Profile } from './../models/profile.model';
import * as ProfileActions from './../actions/profile.actions';

// Section 1
const initialState: Profile[] = [
  {
    Id: 1,
    Name: 'Yamaha CP33 -> Soundcraft Ui24R',
    // tslint:disable-next-line:max-line-length
    Description:
      'CP33 is the only MIDI device I have and it can now control the mixer :-)',
    Events: [
      {
        Id: 1,
        Name: 'Note [x:integer] Pressed With Velocity [y:integer]',
        Control: 48
      },
      {
        Id: 2,
        Name: 'Zone [x:integer] Volume [y:float]',
        Control: 2
      },
      {
        Id: 3,
        Name: 'Modulation [y:float]',
        Control: 3
      },
      {
        Id: 4,
        Name: 'Modulation [y:float]',
        Control: 4
      },
      {
        Id: 5,
        Name: 'Pitch [y:float]',
        Control: 5
      }
    ],
    Commands: [
      {
        Id: 1,
        Name: 'Channel 1 Phantom',
        Code: 'SETD^i.0.phantom^{x}'
      },
      {
        Id: 2,
        Name: 'Channel 1 Invert',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 3,
        Name: 'Channel 1 Volume',
        Code: 'SETD^i.0.mix^val{x}'
      },
      {
        Id: 4,
        Name: 'Channel 1 Mute',
        Code: 'SETD^i.0.mute^val{x}'
      },
      {
        Id: 5,
        Name: 'Channel 1 Pan',
        Code: 'SETD^i.0.pan^val{x}'
      },
      {
        Id: 6,
        Name: 'Channel 1 Compressor Attack',
        Code: 'SETD^i.0.dyn.attack^val{x}'
      },
      {
        Id: 7,
        Name: 'Channel 1 Compressor Bypass',
        Code: 'SETD^i.0.dyn.bypass^val{x}'
      },
      {
        Id: 8,
        Name: 'Channel 1 Compressor Threshold',
        Code: 'SETD^i.0.dyn.threshold^val{x}'
      },
      {
        Id: 9,
        Name: 'Channel 1 Compressor Ratio',
        Code: 'SETD^i.0.dyn.ratio^val{x}'
      },
      {
        Id: 10,
        Name: 'Channel 1 Compressor Release',
        Code: 'SETD^i.0.dyn.release^{x}'
      },
      {
        Id: 11,
        Name: 'Channel 1 Compressor Softknee',
        Code: 'SETD^i.0.dyn.softknee^{x}'
      },
      {
        Id: 12,
        Name: 'Channel 1 Post',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 13,
        Name: 'Channel 1 Solo',
        Code: 'SETD^i.0.solo^val{x}'
      },
      {
        Id: 14,
        Name: 'Channel 1 Gain',
        Code: 'SETD^i.0.gain^{x}'
      },
      {
        Id: 15,
        Name: 'Aux 1 Volume',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 16,
        Name: 'Aux 1 Mute',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 17,
        Name: 'Fx 1 Volume',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 18,
        Name: 'Master Volume',
        Code: 'SETD^afasfsfa'
      },
      {
        Id: 19,
        Name: 'Delay Tempo',
        Code: 'SETD^i.0.aux.0.value^{x}'
      }
    ],
    Target: '192.168.0.174',
    Rules: []
  },
  {
    Id: 2,
    Name: 'Korg nanoControl -> Soundcraft Ui24R',
    // tslint:disable-next-line:max-line-length
    Description: 'Example mapping',
    Events: [
      {
        Id: 1,
        Name: 'Channel 1 Volume',
        Control: 0
      },
      {
        Id: 2,
        Name: 'Channel 2 Volume',
        Control: 1
      },
      {
        Id: 3,
        Name: 'Channel 3 Volume',
        Control: 2
      },
      {
        Id: 4,
        Name: 'Channel 4 Volume',
        Control: 3
      },
      {
        Id: 5,
        Name: 'CHannel 5 Volume',
        Control: 4
      },
      {
        Id: 6,
        Name: 'Channel 6 Volume',
        Control: 5
      },
      {
        Id: 7,
        Name: 'Channel 7 Volume',
        Control: 6
      },
      {
        Id: 8,
        Name: 'Channel 8 Volume',
        Control: 7
      },
      {
        Id: 9,
        Name: 'Channel 1 Gain',
        Control: 8
      },
      {
        Id: 10,
        Name: 'Channel 2 Gain',
        Control: 9
      },
      {
        Id: 11,
        Name: 'Channel 3 Gain',
        Control: 10
      },
      {
        Id: 12,
        Name: 'Channel 4 Gain',
        Control: 11
      },
      {
        Id: 13,
        Name: 'Channel 5 Kno5',
        Control: 12
      },
      {
        Id: 14,
        Name: 'Channel 6 Gain',
        Control: 13
      },
      {
        Id: 15,
        Name: 'Channel 7 Gain',
        Control: 14
      },
      {
        Id: 16,
        Name: 'Channel 8 Gain',
        Control: 15
      },
      {
        Id: 17,
        Name: 'Channel 1 Solo',
        Control: 16
      },
      {
        Id: 18,
        Name: 'Channel 2 Solo',
        Control: 17
      },
      {
        Id: 19,
        Name: 'Channel 3 Solo',
        Control: 18
      },
      {
        Id: 20,
        Name: 'Channel 4 Solo',
        Control: 19
      },
      {
        Id: 21,
        Name: 'Channel 5 Solo',
        Control: 20
      },
      {
        Id: 22,
        Name: 'Channel 6 Solo',
        Control: 21
      },
      {
        Id: 23,
        Name: 'Channel 7 Solo',
        Control: 22
      },
      {
        Id: 24,
        Name: 'Channel 8 Solo',
        Control: 23
      },
      {
        Id: 25,
        Name: 'Channel 1 Mute',
        Control: 24
      },
      {
        Id: 26,
        Name: 'Channel 2 Mute',
        Control: 25
      },
      {
        Id: 27,
        Name: 'Channel 3 Mute',
        Control: 26
      },
      {
        Id: 28,
        Name: 'Channel 4 Mute',
        Control: 27
      },
      {
        Id: 29,
        Name: 'Channel 5 Mute',
        Control: 28
      },
      {
        Id: 30,
        Name: 'Channel 6 Mute',
        Control: 29
      },
      {
        Id: 31,
        Name: 'Channel 7 Mute',
        Control: 30
      },
      {
        Id: 32,
        Name: 'Channel 8 Mute',
        Control: 31
      },
      {
        Id: 33,
        Name: 'Channel 1 Record',
        Control: 32
      },
      {
        Id: 34,
        Name: 'Channel 2 Record',
        Control: 33
      },
      {
        Id: 35,
        Name: 'Channel 3 Record',
        Control: 34
      },
      {
        Id: 36,
        Name: 'Channel 4 Record',
        Control: 35
      },
      {
        Id: 37,
        Name: 'Channel 5 Record',
        Control: 36
      },
      {
        Id: 38,
        Name: 'Channel 6 Record',
        Control: 37
      },
      {
        Id: 39,
        Name: 'Channel 7 Record',
        Control: 38
      },
      {
        Id: 40,
        Name: 'Channel 8 Record',
        Control: 39
      },
      {
        Id: 41,
        Name: 'Track <',
        Control: 40
      },
      {
        Id: 42,
        Name: 'Track >',
        Control: 41
      }
    ],
    Commands: [
      {
        Id: 1,
        Name: 'Channel [x:integer] Phantom [y:bool]',
        Code: 'SETD^afasfsfa'
      }
    ],
    Target: '192.168.0.174',
    Rules: []
  }
];

export function reducer(
  state: Profile[] = initialState,
  action: ProfileActions.Actions
) {
  switch (action.type) {
    case ProfileActions.ADD_PROFILE:
      return [...state, action.profile];
    case ProfileActions.UPDATE_PROFILE:
      return state.map((profile) => {
        if (profile.Id === action.profile.Id) {
          return action.profile;
        } else { return profile; }
      });
    case ProfileActions.DELETE_PROFILE:
      return state.filter(profile => profile.Id !== action.id);
    default:
      return state;
  }
}
