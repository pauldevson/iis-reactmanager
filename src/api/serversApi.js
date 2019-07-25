import {
  getAuthHeader,
  getEndpointUrl,
  getErrorFromHTTPStatusCode
} from './apiUtils';
import { TEST_ENDPOINT, HEADER_CONTENT_TYPE, HEADER_ACCEPT } from './apiConfig';
import { sleep } from 'utils';

const endpointUrl = getEndpointUrl(TEST_ENDPOINT);

export const connect = async server => {
  const authHeader = getAuthHeader(server.token);
  try {
    await sleep(1000); // TODO remove this line no mames
    const res = await fetch(`${server.url}${TEST_ENDPOINT}`, {
      method: 'GET',
      headers: { ...HEADER_CONTENT_TYPE, ...HEADER_ACCEPT, ...authHeader } //...HEADER_CONTENT_TYPE,
    });

    return {
      connected: res.ok,
      message: getErrorFromHTTPStatusCode(res.status)
    };
  } catch (error) {
    debugger;
    console.log(error);
    return { connected: false, message: error.message };
  }
};
