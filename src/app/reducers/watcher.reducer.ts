import { Profile } from "../models/profile.model";
import * as WatcherActions from "../actions/watcher.actions";

export interface WatcherState {
  dec: boolean;
  hex: boolean;
  bin: boolean;
}

export const initialState: WatcherState = {
  hex: true,
  dec: false,
  bin: false
};

export function reducer(
  state: WatcherState = initialState,
  action: WatcherActions.Actions
): WatcherState {
  switch (action.type) {
    case WatcherActions.TOGGLE_BIN:
      state.bin = !state.bin;
      return state;
    case WatcherActions.TOGGLE_DEC:
      state.dec = !state.dec;
      return state;
    case WatcherActions.TOGGLE_HEX:
      state.hex = !state.hex;
      return state;
    default:
      return state;
  }
}
