import * as types from 'core/actionTypes';
import { api, alert } from 'app/utils';
import { showDesktopNotificationPrompt } from 'modules/activity/activity.actions';

const Alert = alert.Alert();

export function setCreatePostState(state) {
  return {
    type: types.SET_CREATE_POST_STATE,
    payload: state
  };
}

export function setPostCategory(tag) {
  const set = tag || null;
  return {
    type: 'SET_POST_CATEGORY',
    payload: set
  };
}

export function clearCreatePost() {
  return {
    type: 'CLEAR_CREATE_POST'
  };
}

export function submitPost(post) {
  return async dispatch => {
    try {
      await api.request({
        method: 'POST',
        endpoint: 'post',
        body: JSON.stringify(post)
      });
      dispatch(
        showDesktopNotificationPrompt({
          // actionText: 'Click Here baby!',
          // messageText: 'Enable desktop notifications, you know you want to',
          // dismissText: 'Dismiss me, bye!',
        })
      );
      return true;
    } catch (err) {
      Alert.alert('Error creating post', err.message);
      return false;
    }
  };
}

// TODO update to use api util
export function generatePreviewServer(link) {
  return () =>
    fetch(
      process.env.API_SERVER +
        '/api/post/preview/generate?url=' +
        encodeURIComponent(link),
      { method: 'GET' }
    )
    .then(response => response.json())
    .then(responseJSON => responseJSON)
    .catch(Alert);
}
