import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
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
      <View style = {styles.lineStyle}/>
      <Text style={styles.bodyheader}>{data.diningPage[0].header2}</Text>
      <Text style={styles.body1}>{data.diningPage[0].breakfast}</Text>
      <Text style={styles.body1}>{data.diningPage[0].lunch}</Text>
      <Text style={styles.body1}>{data.diningPage[0].dinner}</Text>
      <Text style={styles.smallprint}>{data.diningPage[0].smallprint}</Text>
      <View style = {styles.lineStyle}/>
      <Text style={styles.bodyheader}>{data.diningPage[0].header3}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body2}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header4}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body3}</Text>
      <Text style={styles.bodyheader}>{data.diningPage[0].header5}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body4}</Text>
      <Text style={styles.body2}>{data.diningPage[0].parties}</Text>
      <Text style={styles.body2}>{data.diningPage[0].snack}</Text>
      <Text style={styles.body2}>{data.diningPage[0].iceCream}</Text>
      <Text style={styles.body2}>{data.diningPage[0].smoothies}</Text>
      <Text style={styles.body2}>{data.diningPage[0].body5}</Text>
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
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  bodyheader: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  body1:{
    fontSize: 20,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'center',
  },
  body2: {
    fontSize: 18,
    margin: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'left',
    paddingLeft: 5,
  },
  smallprint: {
    fontSize: 10,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'center',
    paddingLeft: 5,
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
});
