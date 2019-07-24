import {
  CONNECT_SERVER,
  DELETE_SERVER,
  ADD_SERVER,
  CONNECT_SERVER_ERROR
} from '../actions/constants';
import initialState from './initialState';

export default function connectionsReducer(
  state = initialState.connection,
  action
) {
  const { type, server, error } = action;
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
    case CONNECT_SERVER_ERROR:
      state = {
        ...state,
        error: error
      };
      break;
    default:
      break;
  }
  return state;
}
