import * as types from 'core/actionTypes';
import { api, alert } from 'app/utils';

const Alert = alert.Alert();

export function addCommunity(community) {
  return {
    type: types.ADD_COMMUNITY,
    payload: community
  };
}

export function modifyCommunity(community) {
  return {
    type: types.UPDATE_COMMUNITY,
    payload: community
  };
}

export function removeCommunity(communitySlug) {
  return {
    type: types.REMOVE_COMMUNITY,
    payload: communitySlug
  };
}

export function setCommunities(communities) {
  return {
    type: types.SET_COMMUNITIES,
    payload: communities
  };
}

export function setCommunityMembers(slug, members) {
  return {
    type: types.SET_COMMUNITY_MEMBERS,
    payload: { slug, members }
  };
}

// currently in auth, should move to community
// export function setCommunity(community) {
//   return dispatch => {
//     api.setCommunity(community);
//     return dispatch({
//       type: types.SET_COMMUNITY,
//       payload: community
//     });
//   };
// }

export function getCommunityAdmins() {}

export function setUserMemberships(memberships) {
  return {
    type: types.SET_USER_MEMBERSHIPS,
    payload: memberships
  };
}

export function getCommunityMembers({ slug, skip, limit }) {
  return async dispatch => {
    try {
      const members = await api.request({
        method: 'GET',
        endpoint: 'community',
        params: {
          slug,
          members: 'members'
        },
        query: {
          skip,
          limit
        }
      });
      return dispatch(setCommunityMembers(slug, members));
    } catch (error) {
      return false;
    }
  };
}

export function getCommunities() {
  return async dispatch => {
    try {
      const res = await api.request({
        method: 'GET',
        endpoint: 'community'
      });
      return dispatch(setCommunities(res));
    } catch (error) {
      return false;
    }
  };
}

export function createCommunity(community) {
  return async dispatch => {
    try {
      const responseJSON = await api.request({
        method: 'POST',
        endpoint: 'community',
        body: JSON.stringify(community)
      });
      dispatch(addCommunity(responseJSON));
      return Alert.alert('Community Created', 'success');
    } catch (err) {
      return Alert.alert(err.message);
    }
  };
}

export function updateCommunity(community) {
  return async dispatch => {
    try {
      const responseJSON = await api.request({
        method: 'PUT',
        endpoint: `community/${community._id}`,
        body: JSON.stringify(community)
      });
      dispatch(modifyCommunity(responseJSON));
      return Alert.alert('Community Updated', 'success');
    } catch (err) {
      return Alert.alert(err.message);
    }
  };
}

export function deleteCommunity(community) {
  const { slug } = community;
  return async dispatch => {
    try {
      await api.request({
        method: 'DELETE',
        endpoint: `community/${slug}`
      });
      dispatch(removeCommunity(slug));
      return Alert.alert('Community Removed', 'success');
    } catch (err) {
      return Alert.alert(err.message);
    }
  };
}

export function joinCommunity(community) {
  const { slug, name } = community;
  return async () => {
    try {
      await api.request({
        method: 'PUT',
        endpoint: `community/${slug}/join`
      });
      return Alert.alert(`Joined Community: ${name}`, 'success');
    } catch (err) {
      return Alert.alert(err.message);
    }
  };
}

export function searchMembers(val, community) {
  const limit = 50;
  return async () => {
    try {
      const res = await api.request({
        method: 'GET',
        endpoint: 'community',
        path: `/${community}/members/search`,
        query: { limit, search: val }
      });
      return res;
    } catch (err) {
      return err;
    }
  };
}