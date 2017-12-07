import React from 'react';
import {StackNavigator} from 'react-navigation';
import {RecreationsScreen} from '../Pages/RecreationsScreen.js';
import {RecDetailScreen} from '../Pages/RecDetailScreen.js';

export const RecStack = StackNavigator({
  Recreation: {
    screen: RecreationsScreen
  },
  Detail: {
    screen: RecDetailScreen
  }

});
