import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import {data} from '../data/data.js';

//Displays all information on dining
//Pulls information from data.js
export class DiningHallScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>{data.diningPage[0].detail}</Text>
        </ScrollView>
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
  text: {
    fontSize: 23,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  }
});
