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
import {ContactUsScreen} from './Pages/ContactUsScreen.js';


//Current most top-level navigator
const RootStack = StackNavigator({
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
}

);

const RootTabs = TabNavigator({
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

const SplashStack = StackNavigator({
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


export default SplashStack;

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
