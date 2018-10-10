import { Command } from './../models/command.model';
import * as CommandActions from './../actions/command.actions';

const initialState: Command[] = [];

export function reducer(
  state: Command[] = initialState,
  action: CommandActions.Actions
) {
  switch (action.type) {
    case CommandActions.ADD_COMMAND:
      state.unshift(action.payload);
      if (state.length > 100) {
        state = state.slice(0, 100);
      }
      return state;
    default:
      return state;
  }
}
