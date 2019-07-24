import {
  getAuthHeader,
  getEndpointUrl,
  getErrorFromHTTPStatusCode
} from './apiUtils';
import { TEST_ENDPOINT, HEADER_CONTENT_TYPE, HEADER_ACCEPT } from './apiConfig';

const endpointUrl = getEndpointUrl(TEST_ENDPOINT);

export const connect = async server => {
  const authHeader = getAuthHeader(server.token);
  try {
    debugger;
    const res = await fetch(`${server.url}${TEST_ENDPOINT}`, {
      method: 'GET',
      headers: { ...HEADER_ACCEPT, ...authHeader } //...HEADER_CONTENT_TYPE,
    });

    console.log(res);
    debugger;
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
