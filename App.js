//import tools
import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

//import classes/components
import {HomeScreen} from './HomeScreen.js';
import {ProfileScreen} from './ProfileScreen.js';
import {Page3} from './Page3.js'


const AppDriver = StackNavigator({
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
