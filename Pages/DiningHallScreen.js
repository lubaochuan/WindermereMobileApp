import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

export class DiningHallScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>Dining Hall</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'grey'
  },
})
