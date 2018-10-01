import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';

export const ADD_PROFILE = '[Profiles] add profile';
export const UPDATE_PROFILE = '[Profiles] update profile';
export const DELETE_PROFILE = '[Profiles] udelete profile';

export class Add implements Action {
  readonly type = ADD_PROFILE;

  constructor(public profile: Profile) {}
}

export class Update implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public profile: Profile) {}
}

export class Delete implements Action {
  readonly type = DELETE_PROFILE;

  constructor(public id: number) {}
}

export type Actions = Add | Update | Delete;
