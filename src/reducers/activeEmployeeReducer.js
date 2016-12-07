import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_EMPLOYEE_FORM:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ActionTypes.CLEAR_EMPLOYEE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
