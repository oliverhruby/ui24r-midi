import { Command } from './models/command.model';
import { Rule } from './models/rule.model';

export interface AppState {
    readonly commands: Command[];
    readonly rules: Rule[];
}