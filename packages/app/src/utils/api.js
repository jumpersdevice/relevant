import * as storage from './storage';

import { API_URL } from './env';

export const request = options => (dispatch, getState) => _request(options, getState);

/**
 * send request to api
 * @param  {[type]} options
 * query - Object of url query params
 * params - url params
 * endpoint - api endpoint (user / post etc)
 * path - speicifi api call (default is index)
 * uri - optional - custom url
 * method - REST method
 * body: body
 */
export async function _request(options, getState) {
  const state = getState();

  // Add community query parameter
  const community = state.community.active;
  const query = community ? { community, ...options.query } : { ...options.query };

  const params = { ...options, query };
  const { token } = state.auth;
  return getDataFromClient(params, token);
}

async function getDataFromClient(params, token) {
  const url = constructUri(params);
  const response = await fetch(addQueryParams(url, params.query), {
    method: params.method,
    ...(await reqOptions(token)),
    body: params.body
  });
  const responseOk = await handleErrors(response);
  return responseOk.json();
}

function constructUri(options) {
  const rootUrl = options.uri || API_URL;
  const apiPath = options.endpoint.match('auth') ? '' : '/api/';
  const path = options.path || '';
  const params = options.params
    ? Object.keys(options.params).reduce((a, key) => a + '/' + options.params[key], '')
    : '';
  return rootUrl + apiPath + options.endpoint + path + params;
}

export async function reqOptions(_token) {
  try {
    const token = (await storage.getToken()) || _token;
    return {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
  } catch (err) {
    return {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  }
}

export const addQueryParams = (url, params) => {
  if (!params) return '';
  const paramString = Object.keys(params)
    .filter(p => params[p])
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  if (paramString && paramString.length)
    return url.indexOf('?') > 0 ? `${url}&${paramString}` : `${url}?${paramString}`;
  return url;
};

export async function handleErrors(response) {
  if (!response.ok) {
    let error = response.statusText;
    try {
      const json = await response.json();
      if (json) {
        error = json.message;
        throw Error(error);
      }
    } catch (err) {
      throw Error(error);
    }
  }
  return response;
}
