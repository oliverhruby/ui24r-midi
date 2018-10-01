import { Device } from './../models/device.model';
import * as DeviceActions from './../actions/device.actions';

const initialState: Device[] = [];

export function reducer(
  state: Device[] = initialState,
  action: DeviceActions.Actions
) {
  switch (action.type) {
    case DeviceActions.UPDATE_DEVICES:
      return action.devices;
    default:
      return state;
  }
}
