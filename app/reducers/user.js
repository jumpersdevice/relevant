import * as types from '../actions/actionTypes';

const maxGarbage = 10;

const addItems = (arr, newArr) => {
  if (!arr.length) return newArr;
  const removeDuplicates = newArr.filter((el) => {
    return arr.indexOf(el) < 0;
  });
  let finalArr = arr.concat(removeDuplicates);
  return finalArr;
};

const initialState = {
  error: false,
  selectedUserData: {},
  list: [],
  loading: false,
  garbage: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case 'SET_SELECTED_USER_DATA': {
      return {
        ...state,
        selectedUserData: {
          ...state.selectedUserData,
          [action.payload._id]: action.payload,
        }
      };
    }

    case 'GET_USER_LIST': {
      return Object.assign({}, state, {
        'loading': true,
      });
    }

    case 'SET_USER_LIST': {
      return Object.assign({}, state, {
        list: [
          ...state.list.slice(0, action.payload.index),
          ...action.payload.users
        ],
        'loading': false,
      });
    }


    case 'CLEAR_USER_LIST': {
      return Object.assign({}, state, {
        'list': [],
      });
    }

    default:
      return state;
  }
};
