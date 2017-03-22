import * as types from './actionTypes';
import * as utils from '../utils';

utils.fetchUtils.env();

const reqOptions = async () => {
  let token = await utils.token.get();
  console.log('get token ', token);
  return {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  };
};

export function setDiscoverTags(data) {
  return {
    type: types.SET_DISCOVER_TAGS,
    payload: data
  };
}

// export function goToTag(tag) {
//   return (dispatch) => {
//     dispatch(setTag(tag));
//   };
// }

export function selectTag(tag) {
  return {
    type: 'SELECT_TAG',
    payload: tag
  };
}

export function deselectTag(tag) {
  return {
    type: 'DESELECT_TAG',
    payload: tag
  };
}

export function updateParentTag(tag) {
  return {
    type: types.UPDATE_PARENT_TAG,
    payload: tag
  };
}


export function setParentTags(data) {
  return {
    type: types.SET_PARENT_TAGS,
    payload: data
  };
}

export function getDiscoverTags() {
  return dispatch => {
    fetch(process.env.API_SERVER + '/api/tag?sort=count', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(utils.fetchUtils.handleErrors)
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(setDiscoverTags(responseJSON));
    })
    .catch((error) => {
      console.log(error, 'error');
    });
  };
}

export function searchTags(tag) {
  return (dispatch) => {
    if (!tag || tag === '') {
      return dispatch(setDiscoverTags([]));
    }
    return fetch(process.env.API_SERVER + '/api/tag/search/' + tag, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then((responseJSON) => {
      dispatch(setDiscoverTags(responseJSON));
    })
    .catch(error => {
      console.log('Search error ', error);
    });
  };
}

export function createTag(tag) {
  return async dispatch =>
    fetch(process.env.API_SERVER + '/api/tag', {
      ...await reqOptions(),
      method: 'POST',
      body: JSON.stringify(tag)
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(setParentTags([responseJSON]));
    })
    .catch((error) => {
      console.log('error creating tag ', error);
      return { status: false, data: error };
    });
}

export function updateTag(tag) {
  return async dispatch =>
    fetch(process.env.API_SERVER + '/api/tag/categories', {
      ...await reqOptions(),
      method: 'PUT',
      body: JSON.stringify(tag)
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(updateParentTag(responseJSON));
    });
}

export function getParentTags() {
  return async (dispatch) => {
    fetch(process.env.API_SERVER + '/api/tag/categories?active', {
      method: 'GET',
      ...await reqOptions()
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      dispatch(setParentTags(responseJSON));
    })
    .catch((error) => {
      console.log('parents error', error);
    });
  };
}

