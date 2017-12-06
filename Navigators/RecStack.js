import React from 'react';
import {StackNavigator} from 'react-navigation';
import {RecreationsScreen} from '../Pages/RecreationsScreen.js';

export const RecStack = StackNavigator({
  Recreation: {
    screen: RecreationsScreen
  },
  Detail: {
    screen: RecDetailScreen
  }

});
