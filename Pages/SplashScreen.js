/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import {NavigationActions} from 'react-navigation';

//Splash screen page
//Tap to continue
export class SplashScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;

    //use this as the navigation so the user cannot navigate back to the splash screen
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'RootTabs' })
      ]
    });


    return (
      <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
      />
      <TouchableOpacity style={styles.highlight}
        onPress={() => this.props.navigation.dispatch(resetAction)}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome to</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/WinLogo.png')}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.smalltext}>Tap to Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    width: '100%'
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontFamily: Platform.OS === 'ios' ? 'Baskerville' : 'sans-serif-light',
  },
  smalltext: {
    color: 'black'
  },
  imageContainer: {
    width: '80%',
  },
  logoImage: {
    //marginBottom: 50,
    resizeMode: 'contain',
    width: '100%',
    //tintColor: 'grey',
  }
});
