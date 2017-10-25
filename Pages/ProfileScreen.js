/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {navOptions} from '../StyleSheets/NavigationOptionsObj.js';

export class ProfileScreen extends React.Component {
  static navigationOptions = navOptions('Profile', true);

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'grey'
  }
});
