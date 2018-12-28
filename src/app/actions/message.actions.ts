import { Action } from "@ngrx/store";
import { Message } from "../models/message.model";

/**
 * All the constants to define our actions
 */
export const ADD_MESSAGE = "[Messages] add message";
export const CLEAR_MESSAGES = "[Messages] clear messages";

// tslint:disable:max-classes-per-file

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
  public readonly type = ADD_MESSAGE;

  constructor(public payload: Message) {}
}

export class Clear implements Action {
  public readonly type = CLEAR_MESSAGES;
}

export type Actions = Add | Clear;
