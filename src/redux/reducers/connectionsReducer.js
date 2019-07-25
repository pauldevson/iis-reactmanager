import {
  CONNECT_SERVER,
  DELETE_SERVER,
  ADD_SERVER,
  CONNECT_SERVER_ERROR,
  CONNECTING_SERVER,
  SET_CURRENT_SERVER
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
      state = {
        connecting: false,
        servers: [...state.servers, { ...server }]
      };
      break;
    case DELETE_SERVER:
      state = {
        connected: state.connected,
        connecting: false,
        servers: state.servers.filter(s => s.id !== server.id)
      };
      break;
    case CONNECT_SERVER_ERROR:
      state = {
        ...state,
        connecting: false,
        error: error
      };
      break;
    case CONNECTING_SERVER:
      state = {
        ...state,
        ...action
      };
      break;
    case SET_CURRENT_SERVER:
      state = { ...state, connected: true };
      state.server = state.servers.map(s => {
        s.connected = s.id === server.id;
        return s;
      });
      break;
    default:
      break;
  }
  return state;
}
