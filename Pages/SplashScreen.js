/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import {NavigationActions} from 'react-navigation';

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
      <TouchableHighlight
        onPress={() => this.props.navigation.dispatch(resetAction)}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>SPLASH PAGE</Text>
            <Text>Press to Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
  }
});
