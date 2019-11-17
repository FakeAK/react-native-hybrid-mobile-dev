import React from 'react';
import {View} from 'react-native';
import Login from './src/login';
import StackNavigator from './src/navigators/navigator';


const App = () => {
  return (
    <View style={{flex: 1}}>
        <StackNavigator />
    </View>
  );
};

export default App;
