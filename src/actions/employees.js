import Firebase from 'firebase';
import * as ActionTypes from '../actions/types';

export const initList = () => {
  const { currentUser } = Firebase.auth();

  return (dispatch) => {
    Firebase.database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: ActionTypes.UPDATE_EMPLOYEE_LIST,
          payload: snapshot.val()
        });
      });
  };
};
