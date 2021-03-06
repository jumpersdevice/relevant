import * as types from 'core/actionTypes';
import { storage, api, alert } from 'app/utils';
import * as errorActions from 'modules/ui/error.actions';
// eslint-disable-next-line
import * as navigationActions from 'modules/navigation/navigation.actions';
import * as tooltipActions from 'modules/tooltip/tooltip.actions';
import { setUserMemberships } from 'modules/community/community.actions';
import { API_URL } from 'utils/env';
import { BANNED_COMMUNITY_SLUGS } from '@r3l/common';

const Alert = alert.Alert();

let PushNotification;
let userDefaults;

let Analytics;
let ReactGA;
let TwitterCT;

if (process.env.WEB !== 'true') {
  Analytics = require('react-native-firebase').analytics();
  userDefaults = require('react-native-swiss-knife').RNSKBucket;
  PushNotification = require('react-native-push-notification');
} else {
  ReactGA = require('react-ga').default;
  TwitterCT = require('app/utils/social').TwitterCT;
}

const APP_GROUP_ID = 'group.com.4real.relevant';

const reqOptions = async () => {
  const token = await storage.getToken();
  return {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
};

export function setCommunity(community) {
  return dispatch => {
    if (community == null || BANNED_COMMUNITY_SLUGS.includes(community)) return null;
    return dispatch({
      type: types.SET_COMMUNITY,
      payload: community
    });
  };
}

export function setInviteCode(code) {
  return {
    type: types.SET_INVITE_CODE,
    payload: code
  };
}

export function updateInvite(invite) {
  return {
    type: types.UPDATE_INVITE,
    payload: invite
  };
}

export function sendPong() {
  return {
    type: 'server/pong'
  };
}

export function updateAuthUser(user) {
  return {
    type: types.UPDATE_AUTH_USER,
    payload: user
  };
}

export function setUser(user) {
  return {
    type: types.SET_USER,
    payload: user
  };
}

export function setSelectedUserData(data) {
  return {
    type: 'SET_SELECTED_USER_DATA',
    payload: data
  };
}

export function setUserIndex(userIndex) {
  return {
    type: types.SET_USER_INDEX,
    payload: userIndex
  };
}

export function setPreUser(preUser) {
  return {
    type: 'SET_PRE_USER',
    payload: preUser
  };
}

export function setAuthStatusText(text) {
  return {
    type: 'SET_AUTH_STATUS_TEXT',
    payload: text || null
  };
}

export function loginUserSuccess(token) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      token
    }
  };
}

export function loginUserFailure() {
  return {
    type: types.LOGIN_USER_FAILURE
  };
}

export function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  };
}

export function logout() {
  return {
    type: types.LOGOUT_USER
  };
}

export function cacheCommunity(community) {
  return async dispatch => {
    try {
      await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/updateCommunity',
          body: JSON.stringify({ community })
        })
      );
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  };
}

export function logoutAction(user) {
  return dispatch => {
    storage.removeToken().then(() => {
      // websocket message
      if (user && user._id) {
        dispatch({
          type: 'server/logout',
          payload: user._id
        });
      }
      dispatch(logout());
    });
  };
}

export function setCurrentTooltip(step) {
  return {
    type: types.SET_ONBOARDING_STEP,
    payload: step
  };
}

export function updateUser(user, preventLocalUpdate) {
  return async dispatch => {
    try {
      const res = await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/',
          body: JSON.stringify(user)
        })
      );
      if (!preventLocalUpdate) dispatch(updateAuthUser(res));
      return true;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function updateNotificationSettings(
  notificationSettings,
  subscription,
  deviceTokens
) {
  return async dispatch => {
    try {
      const res = await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/notifications',
          body: JSON.stringify({ notificationSettings, subscription, deviceTokens })
        })
      );
      dispatch(updateAuthUser(res));
      return true;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function setDeviceToken(token) {
  return {
    type: 'SET_DEVICE_TOKEN',
    payload: token
  };
}

export function removeDeviceToken(auth) {
  if (!auth) return null;
  return dispatch => {
    const { user } = auth;
    if (user.deviceTokens) {
      const index = user.deviceTokens.indexOf(auth.deviceToken);
      if (index > -1) {
        user.deviceTokens.splice(index, 1);
        dispatch(updateUser(user, true));
      }
    }
  };
}

export function enableMobileNotifications(user, checkIfEnbaled) {
  return dispatch => {
    if (!user.notificationSettings.mobile.all && checkIfEnbaled) return;
    if (!PushNotification) return;
    configurePushNotifications(dispatch);
    registerPushNotification({ dispatch, user });
  };
}

function configurePushNotifications(dispatch) {
  PushNotification.configure({
    onNotification: notification => {
      // other params: foreground, message
      const { userInteraction, data } = notification;
      if (!userInteraction) return;
      if (data && data.postId) {
        const comment = data.comment ? { _id: data.comment } : null;
        if (data.community) dispatch(setCommunity(data.community));
        dispatch(
          navigationActions.goToPost({
            _id: data.postId,
            title: data.title,
            community: data.community,
            comment
          })
        );
      }
    },
    // ANDROID ONLY: GCM Sender ID
    // need to receive remote push notifications)
    senderID: '271994332492',
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: true
  });
}

function registerPushNotification({ dispatch, user }) {
  PushNotification.onRegister = deviceToken => {
    const { token } = deviceToken;
    userDefaults.set('deviceToken', token, APP_GROUP_ID);
    dispatch(setDeviceToken(token));
    const newUser = { ...user };
    if (user.deviceTokens && user.deviceTokens.indexOf(token) < 0) {
      newUser.deviceTokens.push(token);
    } else if (user.deviceTokens.indexOf(token) < 0) {
      newUser.deviceTokens = [token];
    }
    const notificationSettings = {
      ...newUser.notificationSettings
    };
    dispatch(
      updateNotificationSettings(notificationSettings, null, newUser.deviceTokens)
    );
  };
}

function setupUser(user, dispatch) {
  dispatch(setUser(user));
  dispatch(setSelectedUserData(user));
  dispatch(errorActions.setError('universal', false));
  dispatch(tooltipActions.tooltipReady(true));
  return user;
}

export function getUser(callback) {
  return async (dispatch, getState) => {
    try {
      const token = await storage.getToken();
      if (!token) return null;
      dispatch(loginUserSuccess(token));
      const user = await dispatch(
        api.request({
          method: 'GET',
          endpoint: 'user',
          path: '/me'
        })
      );
      setupUser(user, dispatch);
      const state = getState();
      const { community } = state.auth;
      if (!community && user.community) {
        dispatch(setCommunity(null));
      }
      const checkIfEnabled = true;
      dispatch(enableMobileNotifications(user, checkIfEnabled));
      if (user.memberships) {
        dispatch(setUserMemberships(user.memberships));
      }
      if (callback) callback(user);
      return user;
    } catch (error) {
      const message = error ? error.message : null;
      dispatch(errorActions.setError('universal', true, message));
      dispatch(loginUserFailure('Server error'));
      if (callback) callback({ ok: false });
      return null;
    }
  };
}

export function setOnboardingStep(step) {
  return async dispatch =>
    fetch(API_URL + '/api/user/onboarding/' + step, {
      credentials: 'include',
      method: 'GET',
      ...(await reqOptions())
    })
      .then(response => response.json())
      .then(responseJSON => {
        dispatch(updateAuthUser(responseJSON));
        return true;
      })
      .catch(() => false);
}

export function webOnboard(step) {
  return async dispatch => {
    try {
      await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/webonboard',
          params: { step }
        })
      );
      return true;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function loginUser(user) {
  return async dispatch => {
    try {
      const responseJSON = await dispatch(
        api.request({
          method: 'POST',
          endpoint: '/auth',
          path: '/local',
          body: JSON.stringify(user)
        })
      );
      if (responseJSON.token) {
        await storage.setToken(responseJSON.token);
        dispatch(loginUserSuccess(responseJSON.token));
        dispatch(getUser());
        return true;
      }
      dispatch(loginUserFailure(responseJSON.message));
      Alert.alert(responseJSON.message);
      return false;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function userOnline(user, token) {
  return () =>
    fetch(API_URL + '/api/notification/online/' + user._id + '?access_token=' + token, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(() => {
        // Handle error?
      });
}

export function checkUser(string, type, omitSelf = false) {
  return () =>
    fetch(`${API_URL}/api/user/check/user/?${type}=${string}&omitSelf=${omitSelf}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJSON => responseJSON)
      .catch(error => {
        Alert.alert(error.message);
      });
}

export function createUser(user, invitecode) {
  return dispatch =>
    fetch(API_URL + '/api/user', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, invitecode })
    })
      .then(api.handleErrors)
      .then(response => response.json())
      .then(responseJSON => {
        if (responseJSON.token) {
          return storage.setToken(responseJSON.token).then(() => {
            ReactGA &&
              ReactGA.event({
                category: 'User',
                action: 'Created an Account'
              });
            TwitterCT && TwitterCT.signUp();
            Analytics && Analytics.logEvent('CreatedAccount');
            dispatch(loginUserSuccess(responseJSON.token));
            dispatch(getUser());
            return true;
          });
        }
        if (responseJSON.errors) {
          const { errors } = responseJSON;
          let message = '';
          Object.keys(errors).forEach(key => {
            if (errors[key].message) message += errors[key].message;
          });
          Alert.alert(message);
          return false;
        }
        return false;
      })
      .catch(error => {
        if (error.message.match('invitation code')) {
          dispatch(updateInvite(null));
        }
        Alert.alert(error.message);
        return false;
      });
}

export function updateHandle(user) {
  return async dispatch => {
    try {
      const result = await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/updateHandle',
          body: JSON.stringify({ user })
        })
      );
      ReactGA &&
        ReactGA.event({
          category: 'User',
          action: 'Created an Account'
        });
      Analytics && Analytics.logEvent('CreatedAccount');
      setupUser(result, dispatch);
      return true;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function sendConfirmation() {
  return async () =>
    fetch(API_URL + '/api/user/sendConfirmation', {
      method: 'GET',
      ...(await reqOptions())
    })
      .then(api.handleErrors)
      .then(response => response.json())
      .then(responseJSON => {
        Alert.alert(
          'A confirmation email has been sent to ' + responseJSON.email,
          'success'
        );
        return true;
      })
      .catch(err => {
        Alert.alert('Error sending email, please try again ', err.message);
        return false;
      });
}

export function forgotPassword(user, query) {
  return async () => {
    try {
      const res = await fetch(API_URL + '/api/user/forgot' + (query || ''), {
        method: 'PUT',
        ...(await reqOptions()),
        body: JSON.stringify({ user })
      });
      await api.handleErrors(res);
      const responseJSON = await res.json();
      return responseJSON;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function resetPassword(password, token) {
  return async () =>
    fetch(API_URL + '/api/user/resetPassword', {
      method: 'PUT',
      ...(await reqOptions()),
      body: JSON.stringify({ password, token })
    })
      .then(api.handleErrors)
      .then(response => response.json())
      .then(() => {
        Alert.alert('Your password has been updated! Try loggin in.', 'success');
        return true;
      })
      .catch(err => {
        Alert.alert(err.message);
        return false;
      });
}

export function confirmEmail(user, code) {
  return async dispatch =>
    fetch(API_URL + '/api/user/confirm', {
      method: 'PUT',
      ...(await reqOptions()),
      body: JSON.stringify({ user, code })
    })
      .then(api.handleErrors)
      .then(response => response.json())
      .then(responseJSON => {
        Alert.alert('Your email has been confirmed');
        dispatch(updateAuthUser(responseJSON));
        return true;
      })
      .catch(err => {
        Alert.alert(err.message);
        return false;
      });
}

export function setStats(stats) {
  return {
    type: types.SET_STATS,
    payload: stats
  };
}

export function getChart(start, end) {
  return async dispatch => {
    try {
      const chart = await dispatch(
        api.request({
          method: 'GET',
          endpoint: 'relevanceStats',
          path: '/user',
          query: { start, end }
        })
      );
      dispatch(setStats({ chart }));
      dispatch(errorActions.setError('stats', false));
      return true;
    } catch (error) {
      dispatch(errorActions.setError('stats', true, error.message));
      return false;
    }
  };
}

export function getStats(user) {
  return async dispatch => {
    try {
      const stats = await dispatch(
        api.request({
          method: 'GET',
          endpoint: 'relevance',
          path: `/user/${user._id}/stats`
        })
      );
      dispatch(setStats(stats));
      dispatch(errorActions.setError('stats', false));
      return true;
    } catch (error) {
      dispatch(errorActions.setError('stats', true, error.message));
      return false;
    }
  };
}

export function getRelChart(start, end) {
  return async dispatch => {
    try {
      const relChart = await dispatch(
        api.request({
          method: 'GET',
          endpoint: 'statistics',
          path: '/user',
          query: { start, end }
        })
      );
      dispatch(setStats({ relChart }));
      dispatch(errorActions.setError('stats', false));
      return true;
    } catch (error) {
      dispatch(errorActions.setError('stats', true, error.message));
      return false;
    }
  };
}

export function setTwitter(profile) {
  return {
    type: types.SET_TWITTER,
    payload: profile
  };
}

export function setLoading(loading) {
  return {
    type: types.SET_LOADING,
    payload: loading
  };
}

export function twitterAuth(profile, invite) {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const result = await dispatch(
        api.request({
          method: 'POST',
          endpoint: '/auth/',
          path: 'twitter/login',
          body: JSON.stringify({ profile, invite })
        })
      );
      if (!result) {
        throw new Error('Twitter Auth failed');
      }
      dispatch(setLoading(false));
      if (result.user && result.user.role === 'temp') {
        await storage.setToken(result.token);
        dispatch(loginUserSuccess(result.token));

        dispatch(setPreUser(result.user));
        dispatch(setTwitter({ ...profile, token: result.token }));
        return false;
      }
      if (result.token && result.user) {
        await storage.setToken(result.token);
        dispatch(loginUserSuccess(result.token));
        setupUser(result.user, dispatch);
      }
      return true;
    } catch (error) {
      dispatch(setTwitter(null));
      dispatch(setLoading(false));
      Alert.alert(error.message);
      return false;
    }
  };
}

export function userToSocket(user) {
  return dispatch => {
    if (!user) return;
    dispatch({ type: 'server/storeUser', payload: user });
  };
}

export function redeemInvite(invitecode) {
  return async dispatch => {
    try {
      const user = await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'invites',
          path: '/',
          body: JSON.stringify({ invitecode })
        })
      );
      dispatch(setInviteCode(null));
      dispatch(updateAuthUser(user));
      Alert.alert('You are now a trusted admin of the community!', 'success');
    } catch (err) {
      dispatch(setInviteCode(null));
      // Alert.alert(err.message);
    }
  };
}

export function loginWithBox({ address, signature, msg }) {
  return async dispatch => {
    try {
      const res = await dispatch(
        api.request({
          method: 'POST',
          endpoint: '/auth',
          path: '/web3',
          body: JSON.stringify({ address, signature, msg })
        })
      );
      if (res.token) {
        await storage.setToken(res.token);
        dispatch(loginUserSuccess(res.token));
        dispatch(getUser());
        return true;
      }
      dispatch(loginUserFailure(res.message));
      Alert.alert(res.message);
      return false;
    } catch (err) {
      Alert.alert(err.message);
      return false;
    }
  };
}

export function updateUserTokenBalance() {
  return async dispatch => {
    try {
      const res = await dispatch(
        api.request({
          method: 'PUT',
          endpoint: 'user',
          path: '/updateUserTokenBalance'
        })
      );
      dispatch(updateAuthUser(res));
    } catch (err) {
      Alert.alert(err.message);
    }
  };
}
