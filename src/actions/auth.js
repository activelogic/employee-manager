import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as ActionTypes from './types';

export const changeEmail = (text) => ({
  type: ActionTypes.CHANGE_EMAIL,
  payload: text
});

export const changePassword = (text) => ({
  type: ActionTypes.CHANGE_PASSWORD,
  payload: text
});

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN
    });

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => {
        Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(error => loginError(dispatch, error));
      });
  };
};

/*
 * Helper Functions
 */
const loginSuccess = (dispatch, user) => {
  dispatch({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginError = (dispatch, error) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILED,
    payload: error.message
  });
};