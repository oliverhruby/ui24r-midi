import { Action } from '@ngrx/store';

/**
 * All the constants to define our actions
 */
export const CONNECTED = '[Connection] connected';
export const DISCONNECTED = '[Connection] disconnected';
export const MESSAGE_RECEIVED = '[Connection] message received';
export const MESSAGE_SENT = '[Connection] message sent';

/**
 * Implementation of all actions that we handle
 */
export class Connected implements Action {
  readonly type = CONNECTED;

  constructor() {}
}

export class Disconnected implements Action {
  readonly type = DISCONNECTED;

  constructor() {}
}

export class MessageReceived implements Action {
  readonly type = MESSAGE_RECEIVED;

  constructor(public payload: string) {}
}

export class MessageSent implements Action {
  readonly type = MESSAGE_SENT;

  constructor(public payload: string) {}
}

export type Actions = Connected | Disconnected | MessageReceived | MessageSent;
