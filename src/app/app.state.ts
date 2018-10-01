import { Profile } from './models/profile.model';
import { Message } from './models/message.model';
import { Command } from './models/command.model';
import { Device } from './models/device.model';

export interface AppState {
    readonly devices: Device[];
    readonly profiles: Profile[];
    readonly messages: Message[];
    readonly commands: Command[];
}
