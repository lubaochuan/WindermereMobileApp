import React from 'react';
import {StackNavigator} from 'react-navigation';

import {SplashScreen} from '../Pages/SplashScreen.js';
import {RootTabs} from './RootTabs.js';

export const SplashStack = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  RootTabs: {
    screen: RootTabs,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
});
