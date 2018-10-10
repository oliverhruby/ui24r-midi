import { Profile } from './models/profile.model';
import { Message } from './models/message.model';
import { Command } from './models/command.model';
import { Device } from './models/device.model';
import { ProfilesState } from './reducers/profile.reducer';

export interface AppState {
  readonly devices: Device[];
  readonly profiles: ProfilesState;
  readonly messages: Message[];
  readonly commands: Command[];
}
