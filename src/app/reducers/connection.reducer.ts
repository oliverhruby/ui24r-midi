import * as ConnectionActions from './../actions/connection.actions';

export interface ConnectionState {
  connected: boolean;
  events: string[];
  lastPing?: Date;
}

const initialState: ConnectionState = {
  connected: false,
  events: []
};

export function reducer(
  state: ConnectionState = initialState,
  action: ConnectionActions.Actions
) {
  switch (action.type) {
    case ConnectionActions.CONNECTED:
      state.connected = true;
      return state;
    case ConnectionActions.DISCONNECTED:
      state.connected = false;
      return state;
    case ConnectionActions.MESSAGE_RECEIVED:
      state.connected = true;
      state.events.unshift(action.payload);
      if (state.events.length > 100) {
        state.events = state.events.slice(0, 100);
        state.lastPing = new Date();
      }
      return state;
    case ConnectionActions.MESSAGE_SENT:
      state.events.unshift(action.payload);
      if (state.events.length > 100) {
        state.events = state.events.slice(0, 100);
        state.lastPing = new Date();
      }
      return state;
    default:
      return state;
  }
}
