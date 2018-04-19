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
      <Image
        style={{width: '100%', height: '20%'}}
        source={require('../assets/dining.jpg')}
        />
      <ScrollView>
      <Text style={styles.header}>{data.diningPage[0].header}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header2}</Text>
      <Text style={styles.body1}>{data.diningPage[0].body1}</Text>
      <Text style={styles.smallprint}>{data.diningPage[0].smallprint}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header3}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body2}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header4}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body3}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header5}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body4}</Text>
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
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  bodyheader: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  body1:{
    fontSize: 20,
    margin: 10,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  body2: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'Arial',
    textAlign: 'left',
    paddingLeft: 5,
  },
  smallprint: {
    fontSize: 10,
    margin: 10,
    fontFamily: 'Arial',
    textAlign: 'center',
    paddingLeft: 5,
  },
});
