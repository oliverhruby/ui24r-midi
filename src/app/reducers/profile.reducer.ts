import { Profile } from "./../models/profile.model";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as ProfileActions from "./../actions/profile.actions";

export interface ProfilesState extends EntityState<Profile> {
  ids: string[];
  selected: string;
  editing: boolean;
  entities: { [key: string]: Profile };
}

export const adapter: EntityAdapter<Profile> = createEntityAdapter<Profile>();

// tslint:disable:no-duplicate-string
export const initialState: ProfilesState = adapter.getInitialState({
  ids: [
    "4f375c56-9a83-4660-92bd-15858a997a5a",
    "13128653-06d7-4a94-8dd7-f55998fa8dba"
  ],
  selected: null,
  editing: false,
  entities: null
});

export function reducer(
  state: ProfilesState = initialState,
  action: ProfileActions.Actions
): ProfilesState {
  switch (action.type) {
    case ProfileActions.LOAD_PROFILES:
      state.entities = action.payload;
      return state;
    case ProfileActions.EDIT_PROFILE:
      state.editing = !state.editing;
      return state;
    case ProfileActions.ADD_PROFILE:
      return adapter.addOne(action.payload, state);
    case ProfileActions.ADD_PROFILE_RULE:
      state.entities[action.payload.id].Rules.push(action.payload.rule);
      return state;
    case ProfileActions.DELETE_PROFILE_RULE:
      state.entities[action.payload.id].Rules =
        state.entities[action.payload.id].Rules.filter(item => item.Id !== action.payload.ruleId);
      return state;
    case ProfileActions.UPDATE_PROFILE:
      return adapter.updateOne(action.payload.profile, state);
    case ProfileActions.DELETE_PROFILE:
      return adapter.removeOne(action.payload.id, state);
    case ProfileActions.SELECT_PROFILE:
      state.selected = action.payload.Id;
      return state;
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
