import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EMPLOYEE_LIST:
      return action.payload;
    default:
      return state;
  }
};
