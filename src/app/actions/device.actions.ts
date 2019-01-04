import { Action } from "@ngrx/store";
import { Device } from "../models/device.model";

/**
 * All the constants to define our actions
 */
export const UPDATE_DEVICES = "[Devices] update device";
export const LISTEN_TO_DEVICE = "[Devices] listen to device";

/**
 * Implementation of all actions that we handle
 */
export class Update implements Action {
  public readonly type = UPDATE_DEVICES;

  constructor(public devices: Device[]) {}
}

export class ListenTo implements Action {
  public readonly type = LISTEN_TO_DEVICE;

  constructor(public deviceName: string) {}
}

export type Actions = Update | ListenTo;
