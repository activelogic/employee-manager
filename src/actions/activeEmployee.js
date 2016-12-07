import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as ActionTypes from './types';

export const updateEmployeeForm = ({ prop, value }) => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE_FORM,
    payload: {
      prop,
      value
    }
  };
};

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = Firebase.auth();

  return (dispatch) => {
    Firebase.database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: ActionTypes.CLEAR_EMPLOYEE_FORM
        });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
