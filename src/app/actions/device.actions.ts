import { Action } from '@ngrx/store';
import { Device } from '../models/device.model';

/**
 * All the constants to define our actions
 */
export const UPDATE_DEVICES = '[Devices] update';

/**
 * Implementation of all actions that we handle
 */
export class Update implements Action {
  readonly type = UPDATE_DEVICES;

  constructor(public devices: Device[]) {}
}

export type Actions = Update;
