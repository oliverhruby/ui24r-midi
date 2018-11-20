import { Action } from '@ngrx/store';

export const TOGGLE_DEC = '[Watcher] toggle DEC';
export const TOGGLE_BIN = '[Watcher] toggle BIN';
export const TOGGLE_HEX = '[Watcher] toggle HEX';
export const TOGGLE_TIME = '[Watcher] toggle Time';

export class ToggleDec implements Action {
  readonly type = TOGGLE_DEC;

  constructor() {}
}

export class ToggleBin implements Action {
  readonly type = TOGGLE_BIN;

  constructor() {}
}

export class ToggleHex implements Action {
  readonly type = TOGGLE_HEX;

  constructor() {}
}

export class ToggleTime implements Action {
  readonly type = TOGGLE_TIME;

  constructor() {}
}

export type Actions = ToggleBin | ToggleDec | ToggleHex | ToggleTime;
