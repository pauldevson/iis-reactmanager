import { combineReducers } from 'redux';
import connections from './connectionsReducer';
import websites from './websitesReducer';

const reducers = combineReducers({ connections, websites });

export default reducers;
