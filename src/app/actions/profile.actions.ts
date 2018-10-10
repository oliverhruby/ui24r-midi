import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';
import { Update } from '@ngrx/entity';

export const ADD_PROFILE = '[Profiles] add profile';
export const EDIT_PROFILE = '[Profiles] edit profile';
export const SELECT_PROFILE = '[Profiles] select profile';
export const UPDATE_PROFILE = '[Profiles] update profile';
export const DELETE_PROFILE = '[Profiles] delete profile';

export class AddProfile implements Action {
  readonly type = ADD_PROFILE;

  constructor(public payload: Profile) {}
}

export class EditProfile implements Action {
  readonly type = EDIT_PROFILE;

  constructor(public payload: Profile) {}
}

export class SelectProfile implements Action {
  readonly type = SELECT_PROFILE;

  constructor(public payload: Profile) {}
}

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public payload: { profile: Update<Profile> }) {}
}

export class DeleteProfile implements Action {
  readonly type = DELETE_PROFILE;

  constructor(public payload: { id: number }) {}
}

export type Actions = AddProfile | UpdateProfile | DeleteProfile | EditProfile | SelectProfile;
