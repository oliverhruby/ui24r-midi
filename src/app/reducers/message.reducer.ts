import { Message } from './../models/message.model';
import * as MessageActions from './../actions/message.actions';

const initialState: Message[] = [];

export function reducer(
  state: Message[] = initialState,
  action: MessageActions.Actions
) {
  switch (action.type) {
    case MessageActions.ADD_MESSAGE:
      state.unshift(action.message);
      if (state.length > 100) {
        state = state.slice(0, 100);
      }
      return state;
    default:
      return state;
  }
}
