import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {TabNavigator} from 'react-navigation';

import {MapScreen} from '../Pages/MapScreen.js';
import {RootStack} from './RootStack.js';


export const RootTabs = TabNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
    },
  },
}, {
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'grey',
    inactiveTintColor: 'grey',
    inactiveBackgroundColor: 'white',
    labelStyle: {
      fontSize: 20,
    },
  }
});
