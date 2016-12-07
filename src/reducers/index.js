import { combineReducers } from 'redux';

import authReducer from './authReducer';
import activeEmployeeReducer from './activeEmployeeReducer';
import employeesReducer from './employeesReducer';

export default combineReducers({
  auth: authReducer,
  activeEmployee: activeEmployeeReducer,
  employees: employeesReducer
});
