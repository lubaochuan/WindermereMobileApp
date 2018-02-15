import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {TabNavigator} from 'react-navigation';

import {MapScreen} from '../Pages/MapScreen.js';
import {RootStack} from './RootStack.js';


//TabNavigator that contains the RootStack and the Map page.
//Later, will likely replace map page with a StackNavigator with the map page included.
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
  //Styling for the tab bar and it's children components.
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
