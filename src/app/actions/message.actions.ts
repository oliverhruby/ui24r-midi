import { Action } from '@ngrx/store';
import { Message } from '../models/message.model';

/**
 * All the constants to define our actions
 */
export const ADD_MESSAGE = '[Messages] add message';
export const CLEAR_MESSAGES = '[Messages] clear messages';

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
  readonly type = ADD_MESSAGE;

  constructor(public payload: Message) {}
}

export class Clear implements Action {
  readonly type = CLEAR_MESSAGES;

  constructor() {}
}

export type Actions = Add | Clear;
