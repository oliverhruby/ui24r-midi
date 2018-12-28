import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { InputEvent } from "../models/inputevent.model";
import { Profile } from "../models/profile.model";

export const ADD_PROFILE = "[Profiles] add profile";
export const ADD_PROFILE_EVENT = "[Profiles] add profile event";
export const DELETE_PROFILE_EVENT = "[Profiles] delete profile event";
export const EDIT_PROFILE = "[Profiles] edit profile";
export const SELECT_PROFILE = "[Profiles] select profile";
export const UPDATE_PROFILE = "[Profiles] update profile";
export const DELETE_PROFILE = "[Profiles] delete profile";

// tslint:disable:max-classes-per-file

export class AddProfile implements Action {
  public readonly type = ADD_PROFILE;

  constructor(public payload: Profile) {}
}

export class EditProfile implements Action {
  public readonly type = EDIT_PROFILE;

  constructor(public payload: Profile) {}
}

export class SelectProfile implements Action {
  public readonly type = SELECT_PROFILE;

  constructor(public payload: Profile) {}
}

export class UpdateProfile implements Action {
  public readonly type = UPDATE_PROFILE;

  constructor(public payload: { profile: Update<Profile> }) {}
}

export class AddProfileEvent implements Action {
  public readonly type = ADD_PROFILE_EVENT;

  constructor(public payload: { id: string; event: InputEvent }) {}
}

export class DeleteProfileEvent implements Action {
  public readonly type = DELETE_PROFILE_EVENT;

  constructor(public payload: { id: string; eventId: number }) {}
}

export class DeleteProfile implements Action {
  public readonly type = DELETE_PROFILE;

  constructor(public payload: { id: string }) {}
}

export type Actions =
  | AddProfile
  | UpdateProfile
  | DeleteProfile
  | EditProfile
  | SelectProfile
  | AddProfileEvent
  | DeleteProfileEvent;
