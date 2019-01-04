import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { Profile } from "../models/profile.model";
import { Rule } from "../models/rule.model";

export const LOAD_PROFILES = "[Profiles] load";
export const ADD_PROFILE = "[Profiles] add profile";
export const ADD_PROFILE_RULE = "[Profiles] add profile rule";
export const DELETE_PROFILE_RULE = "[Profiles] delete profile rule";
export const EDIT_PROFILE = "[Profiles] edit profile";
export const SELECT_PROFILE = "[Profiles] select profile";
export const UPDATE_PROFILE = "[Profiles] update profile";
export const DELETE_PROFILE = "[Profiles] delete profile";

// tslint:disable:max-classes-per-file

export class LoadProfiles implements Action {
  public readonly type = LOAD_PROFILES;

  constructor(public payload: any) {}
}

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

export class AddProfileRule implements Action {
  public readonly type = ADD_PROFILE_RULE;

  constructor(public payload: { id: string; rule: Rule }) {}
}

export class DeleteProfileRule implements Action {
  public readonly type = DELETE_PROFILE_RULE;

  constructor(public payload: { id: string; ruleId: string }) {}
}

export class DeleteProfile implements Action {
  public readonly type = DELETE_PROFILE;

  constructor(public payload: { id: string }) {}
}

export type Actions =
  | LoadProfiles
  | AddProfile
  | UpdateProfile
  | DeleteProfile
  | EditProfile
  | SelectProfile
  | AddProfileRule
  | DeleteProfileRule;
