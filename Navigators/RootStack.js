import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';

import {HomeScreen} from '../Pages/HomeScreen.js';
import {DiningHallScreen} from '../Pages/DiningHallScreen.js';
import {AccommodationsScreen} from '../Pages/AccommodationsScreen.js';
import {RecreationsScreen} from '../Pages/RecreationsScreen.js';
import {ContactUsScreen} from '../Pages/ContactUsScreen.js';


export const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Dining: {
    screen: DiningHallScreen,
    navigationOptions: {
      title: 'Dining'
    }
  },
  Accommodations: {
    screen: AccommodationsScreen,
    navigationOptions: {
      title: 'Accommodations'
    }
  },
  Recreation: {
    screen: RecreationsScreen,
    navigationOptions: {
      title: 'Recreation'
    }
  },
  Contact: {
    screen: ContactUsScreen,
    navigationOptions: {
      title: 'Contact Us'
    }
  }
});
