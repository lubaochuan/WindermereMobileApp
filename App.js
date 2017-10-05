import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {styles} from './Style.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey Jackie!</Text>
        <Text>:)</Text>
      </View>
    );
  }
}
