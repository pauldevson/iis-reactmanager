import {
  CONNECT_SERVER,
  DELETE_SERVER,
  ADD_SERVER,
  CONNECT_SERVER_ERROR,
  CONNECTING_SERVER,
  SET_CURRENT_SERVER
} from './constants';
import { connect } from 'api/serversApi';

export function connectServer(server) {
  return async dispatch => {
    try {
      const result = await connect(server);
      if (result.connected) {
        dispatch(addServer(server)); // Add the server to the saved servers
        dispatch(setCurrentServer(server));
        // TODO set as current connection and set state to reload those details
        if (server.remember) {
          // TODO save to localstorage
        }
      } else {
        // TODO dispatch an error to state...
        dispatch(connectError({ ...result }));
      }
    } catch (error) {
      return { connected: false, error };
    }
  };
}

export function connectError(error) {
  return { type: CONNECT_SERVER_ERROR, error };
}

export function setConnecting(connecting) {
  return { type: CONNECTING_SERVER, connecting };
}

export function addServer(server) {
  return { type: ADD_SERVER, server };
}

export function deleteServer(server) {
  return { type: DELETE_SERVER, server };
}

export function setCurrentServer(server) {
  return { type: SET_CURRENT_SERVER, server };
}
