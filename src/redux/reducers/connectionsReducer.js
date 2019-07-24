import {
  CONNECT_SERVER,
  DELETE_SERVER,
  ADD_SERVER
} from '../actions/constants';
import initialState from './initialState';

export default function connectionsReducer(
  state = initialState.connection,
  action
) {
  const { type, server } = action;
  switch (type) {
    case CONNECT_SERVER: // Do I need to do something here?
      break;
    case ADD_SERVER:
      debugger;
      server.connected = true;
      return {
        connected: true,
        servers: [...state.servers, { ...server }]
      };
    case DELETE_SERVER:
      state = {
        connected: state.connected,
        servers: state.servers.filter(s => s.id !== server.id)
      };
      break;
    default:
      break;
  }
  return state;
}
