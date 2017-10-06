//import tools
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

//import classes/components
import {SplashScreen} from './Pages/SplashScreen.js';
import {HomeScreen} from './Pages/HomeScreen.js';
import {ProfileScreen} from './Pages/ProfileScreen.js';
import {Page3} from './Pages/Page3.js'


const AppDriver = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Page3: { screen: Page3 },
});


export default class App extends React.Component {
  render () {
    return <AppDriver />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
