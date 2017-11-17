//import tools
import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';


//import classes/components
import {SplashScreen} from './Pages/SplashScreen.js';
import {HomeScreen} from './Pages/HomeScreen.js';
import {MapScreen} from './Pages/MapScreen.js';
import {DiningHallScreen} from './Pages/DiningHallScreen.js';
import {AccommodationsScreen} from './Pages/AccommodationsScreen.js';
import {RecreationsScreen} from './Pages/RecreationsScreen.js';


const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Dining: {
    screen: DiningHallScreen,
    navigationOptions: {
      drawerLabel: 'Dining',
    },
  },
  Accommodations: {
    screen: AccommodationsScreen,
    navigationOptions: {
      drawerLabel: 'Accommodations',
    }
  },
  Recreation: {
    screen: RecreationsScreen,
    navigationOptions: {
      drawerLabel: 'Recreation'
    }
  },
});

const RootTabs = TabNavigator({
  Home: {
    screen: RootDrawer,
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
});

const RootStack = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: RootTabs,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
})



//export default RootTabs;
export default RootStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
