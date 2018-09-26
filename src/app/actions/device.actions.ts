import { Action } from '@ngrx/store';
import { Device } from '../models/device.model';

/**
 * All the constants to define our actions
 */
export const ADD_DEVICE = '[Devices] add device';

/**
 * Implementation of all actions that we handle
 */
export class Add implements Action {
    readonly type = ADD_DEVICE;

    constructor(public device: Device) {}
}

export type Actions = Add;
