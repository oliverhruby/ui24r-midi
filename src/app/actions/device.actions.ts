import { Action } from "@ngrx/store";
import { Device } from "../models/device.model";

/**
 * All the constants to define our actions
 */
export const UPDATE = "[Devices] update";
export const CONNECT = "[Devices] connect";
export const DISCONNECT = "[Devices] disconnect";

/**
 * Implementation of all actions that we handle
 */
export class Update implements Action {
  public readonly type = UPDATE;

  constructor(public devices: Device[]) {}
}

export class Connect implements Action {
  public readonly type = CONNECT;

  constructor(public deviceName: string) {}
}

export class Disconnect implements Action {
  public readonly type = DISCONNECT;

  constructor(public deviceName: string) {}
}

export type Actions = Update | Connect | Disconnect;
