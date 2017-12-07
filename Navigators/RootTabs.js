import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {TabNavigator} from 'react-navigation';

import {MapScreen} from '../Pages/MapScreen.js';
import {RootStack} from './RootStack.js';


export const RootTabs = TabNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      tabBarLabel: 'Info',
      swipeEnabled: false,
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      swipeEnabled: false,
    },
  },
}, {
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'grey',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: 'grey',
    labelStyle: {
      fontSize: 20,
    },
  }
});
