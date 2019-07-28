import { ADD_WEBSITE } from '../actions/constants';
import initialState from './initialState';

export default function websitesReducer(state = initialState.websites, action) {
  switch (action.type) {
    case ADD_WEBSITE:
      return [...state, { ...action.website }];
    default:
      return state;
  }
}
