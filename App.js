/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import Login from './src/login';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
        <Login />
    </View>
  );
};

export default App;
