import { ADD_WEBSITE } from './constants';

export function addWebsite(website) {
  return { type: ADD_WEBSITE, website };
}
