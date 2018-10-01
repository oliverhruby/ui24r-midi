import { Action } from '@ngrx/store';
import { Command } from '../models/command.model';

/**
 * All the constants to define our actions
 */
export const ADD_COMMAND = '[Commands] add command';

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
  readonly type = ADD_COMMAND;

  constructor(public command: Command) {
  }
}

export type Actions = Add;
