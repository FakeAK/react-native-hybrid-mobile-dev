import {
  Platform,
  NativeModules,
  Dimensions
} from 'react-native';

const { StatusBarManager } = NativeModules;

export var Tokens = {
    ACCESS_TOKEN: null,
    REFRESH_TOKEN: null
};

export const User = {
    USER_ID: null
};

export const OSTYPE = {
    IOS: 'ios',
    ANDROID: 'android'
};

export const OS = (Platform.OS === OSTYPE.IOS ? OSTYPE.IOS : OSTYPE.ANDROID);
export const IS_IOS = Platform.OS === OSTYPE.IOS ? true : false;
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
