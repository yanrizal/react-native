/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/containers/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

const store = configureStore();

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Root);
