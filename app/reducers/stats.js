import * as types from '../actions/actionTypes';

const initialState = {};

export default function post(state = initialState, action) {
  switch (action.type) {

    case 'ADD_STATS': {
      console.log(action.payload);
      state[action.payload.user] = action.payload.data;
      return state;
    }

    default:
      return state
  }
};
