import { CONNECT_SERVER, DELETE_SERVER, ADD_SERVER } from './constants';
import { connect } from 'api/serversApi';

export function connectServer(server) {
  debugger;
  return async dispatch => {
    try {
      const result = await connect(server);
      debugger;
      if (result.connected) {
        // TODO set as current connection and set state to reload those details
        if (server.remember) dispatch(addServer(server)); // Add the server to the saved servers
      } else {
        // TODO dispatch an error to state...
      }
    } catch (error) {
      return { connected: false, error };
    }
  };
}

export function addServer(server) {
  debugger;
  return { type: ADD_SERVER, server };
}

export function deleteServer(server) {
  return { type: DELETE_SERVER, server };
}
