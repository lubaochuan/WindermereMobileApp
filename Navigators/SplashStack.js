import React from 'react';
import {StackNavigator} from 'react-navigation';

import {SplashScreen} from '../Pages/SplashScreen.js';
import {RootTabs} from './RootTabs.js';
import {RootStack} from './RootStack.js';


//Stack that only exists to simulate a splash screen. Unlcear if this will remain as the source of our splash screen.
export const SplashStack = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  RootTabs: {
    screen: RootStack,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
});
