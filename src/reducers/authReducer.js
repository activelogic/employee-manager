import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  error: null,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case ActionTypes.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
        password: ''
      };
    case ActionTypes.LOGIN:
      return {
        isLoading: true,
        error: ''
      };
    default:
      return state;
  }
};
