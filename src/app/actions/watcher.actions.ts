import { Action } from "@ngrx/store";

export const TOGGLE_DEC = "[Watcher] toggle DEC";
export const TOGGLE_BIN = "[Watcher] toggle BIN";
export const TOGGLE_HEX = "[Watcher] toggle HEX";

// tslint:disable:max-classes-per-file

export class ToggleDec implements Action {
  public readonly type = TOGGLE_DEC;
}

export class ToggleBin implements Action {
  public readonly type = TOGGLE_BIN;
}

export class ToggleHex implements Action {
  public readonly type = TOGGLE_HEX;
}

export type Actions = ToggleBin | ToggleDec | ToggleHex;
