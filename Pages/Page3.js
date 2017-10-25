/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {navOptions} from '../StyleSheets/NavigationOptionsObj.js';

export class Page3 extends React.Component {
  static navigationOptions = navOptions('Page 3', true);

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Page 3</Text>
        <Button
          title='GO HOME'
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});