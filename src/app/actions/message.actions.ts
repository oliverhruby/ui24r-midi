import { Action } from "@ngrx/store";
import { Message } from "../models/message.model";

/**
 * All the constants to define our actions
 */
export const ADD_MESSAGE = "[Messages] add message";

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
  readonly type = ADD_MESSAGE;

  constructor(public message: Message) {}
}

export type Actions = Add;
