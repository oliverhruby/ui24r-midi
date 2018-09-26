import { Rule } from './models/rule.model';
import { Device } from './models/device.model';
import { Message } from './models/message.model';

export interface AppState {
    readonly devices: Device[];
    readonly rules: Rule[];
    readonly messages: Message[];
}
