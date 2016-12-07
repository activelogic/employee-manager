import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import { FirebaseConfig } from './constants/Firebase';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentWillMount() {
    Firebase.initializeApp(FirebaseConfig);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
