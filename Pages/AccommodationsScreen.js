import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';


//Placeholder for Accommodations Screen.
export class AccommodationsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>{data.accomodationsPages[0].detail}</Text>
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
  },
});
