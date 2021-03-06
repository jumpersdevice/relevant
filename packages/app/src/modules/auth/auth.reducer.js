import * as types from 'core/actionTypes';

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  user: null,
  deviceToken: null,
  preUser: null,
  confirmed: false,
  stats: null,
  nextUpdate: new Date(),
  chart: [],
  relChart: [],
  twitter: null,
  currentInvite: null,
  loading: false,
  community: null,
  invitecode: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SET_INVITE_CODE: {
      return {
        ...state,
        invitecode: action.payload
      };
    }

    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }

    case types.SET_TWITTER: {
      return {
        ...state,
        twitter: action.payload
      };
    }

    case types.SET_STATS: {
      return {
        ...state,
        stats: action.payload.stats || state.stats,
        nextUpdate: action.payload.nextUpdate || state.nextUpdate,
        chart: action.payload.chart || state.chart,
        relChart: action.payload.relChart || state.relChart
      };
    }

    case types.LOGIN_USER_REQUEST:
      return { ...state, isAuthenticating: true, statusText: null };

    case 'SET_PRE_USER':
      return {
        ...state,
        preUser: action.payload
      };

    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token,
        statusText: 'You have been successfully logged in.'
      };

    case types.LOGIN_USER_FAILURE:
      return { ...state, isAuthenticating: false, isAuthenticated: false, user: null };

    case 'SET_AUTH_STATUS_TEXT':
      return {
        ...state,
        statusText: action.payload
      };

    case types.SET_SELECTED_USER_DATA: {
      if (!state.user || state.user._id !== action.payload._id) return state;
      return {
        ...state,
        user: action.payload
      };
    }

    case types.SET_USER:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: !!action.payload || false,
        user: action.payload,
        preUser: null
      };

    case types.UPDATE_USER:
    case types.UPDATE_AUTH_USER: {
      const id = action.payload._id;
      if (state.user && id !== state.user._id) return state;
      let { relevance } = action.payload;
      if ((!relevance || relevance.pagerank === undefined) && state.user) {
        relevance = state.user.relevance;
      }
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          relevance
        }
      };
    }

    case 'SET_DEVICE_TOKEN':
      return {
        ...state,
        deviceToken: action.payload
      };

    case types.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case types.LOGOUT_USER: {
      return { ...initialState, community: state.community };
    }

    case types.UPDATE_INVITE: {
      if (action.payload === null) {
        return {
          ...state,
          currentInvite: null
        };
      }
      return {
        ...state,
        currentInvite: action.payload
      };
    }

    default:
      return state;
  }
}
