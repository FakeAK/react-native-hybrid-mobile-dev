import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../login';
import MapVC from '../map';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Map: {
      screen: MapVC
    }
  });

  export default createAppContainer(StackNavigator);