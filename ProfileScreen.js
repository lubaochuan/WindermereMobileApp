/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Profile Page</Text>
        <Button
          title='Go to Page 3'
          onPress={() => navigate('Page3')}
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
