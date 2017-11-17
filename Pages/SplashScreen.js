/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export class SplashScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigate('Home')}>
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
