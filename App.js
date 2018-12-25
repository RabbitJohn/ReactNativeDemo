/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity,Text, View} from 'react-native';
import NavControl from './src/NavControl';
import {Provider} from 'react-redux';
import {store} from './src/store'

export default class App extends Component {
  render() {
    return (  
      <Provider store={store}>
          <NavControl/>
      </Provider>
    );
  }
}
