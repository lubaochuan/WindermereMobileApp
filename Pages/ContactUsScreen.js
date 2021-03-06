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
          <Text style={styles.mainheader}>{data.contactPage.header}</Text>
          <View style = {styles.lineStyle}/>

          {data.contactPage.detail.map((item, index) => {
            return(
              <View key={index} style={styles.container}>
                <Text style={styles.header}>{item.head}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          })}

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
