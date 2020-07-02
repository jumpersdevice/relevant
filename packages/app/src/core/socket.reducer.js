import * as types from 'core/actionTypes';

const initialState = {
  message: null,
  socketId: null,
  clientData: null,
  ping: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'message': {
      return { ...state, message: action.payload };
    }

    case 'socketId': {
      return { ...state, socketId: action.payload };
    }

    case 'clientData': {
      return { ...state, clientData: action.payload };
    }

    case 'ping': {
      return { ...state, ping: action.payload };
    }

    case types.LOGOUT_USER: {
      return { ...initialState };
    }

    default:
      return state;
  }
}
