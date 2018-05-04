import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import {data} from '../data/data.js';

//Contact Screen
//Pulls from data.js to display info
export class ContactUsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{width: '100%', height: '20%'}}
        source={require('../assets/contact.jpg')}
        />
      <ScrollView>
        <Text style={styles.mainheader}>{data.contactPage[0].header}</Text>
        <View style = {styles.lineStyle}/>
        <Text style={styles.header}>{data.contactPage[0].addressheader}</Text>
        <Text style={styles.body}>{data.contactPage[0].address}</Text>
        <Text style={styles.header}>{data.contactPage[0].phoneheader}</Text>
        <Text style={styles.body}>{data.contactPage[0].phone}</Text>
        <Text style={styles.header}>{data.contactPage[0].emailheader}</Text>
        <Text style={styles.body}>{data.contactPage[0].email}</Text>
        <View style = {styles.lineStyle}/>
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
  mainheader: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  body: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    margin: 10,
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
});
