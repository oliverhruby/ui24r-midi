import { Device } from "./../models/device.model";
import * as DeviceActions from "./../actions/device.actions";

const initialState: Device[] = [];

export function reducer(
  state: Device[] = initialState,
  action: DeviceActions.Actions
) {
  switch (action.type) {
    case DeviceActions.UPDATE:
      return action.devices;
    case DeviceActions.CONNECT:
      state.find(d => d.Name === action.deviceName).Listening = true;
      return [...state];
    case DeviceActions.DISCONNECT:
      state.find(d => d.Name === action.deviceName).Listening = false;
      return [...state];
    default:
      return state;
  }
}
