import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import {data} from '../data/data.js';

//Placeholder for Contact Us Screen.
export class ContactUsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.header}>{data.contactPage[0].header}</Text>
      <Text style={styles.body}>{data.contactPage[0].body}</Text>
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
  header: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  body: {
    fontSize: 23,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});
