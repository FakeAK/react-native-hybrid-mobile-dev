import React, {useEffect} from 'react';
import {View} from 'react-native';
import Login from './src/login';
import StackNavigator from './src/navigators/navigator';
import OneSignal from 'react-native-onesignal'; // Import package from node modules


const App = () => {
  useEffect(() => {
    OneSignal.init("a797eef0-c22d-465d-8382-e9a5ff62a019");

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
  });

  onReceived = (notification) => {
    console.log("Notification received: ", notification);
  }

  onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds = (device) => {
    console.log('Device info: ', device);
  }

  return (
    <View style={{flex: 1}}>
        <StackNavigator />
    </View>
  );
};

export default App;
