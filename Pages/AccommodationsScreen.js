import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';


/*
This is the Accomodations Screen.
Contains limited information on Camp accommodations and a button to the map.
Map button pulls data from the data object to populate the map with multiple markers.
*/

export class AccommodationsScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '20%'}}
          source={require('../assets/accom.jpg')}
        />
        <ScrollView
          style={{width: '100%'}}
        >
          <Text style={styles.text}>Windermere offers a variety of accomodation options!</Text>
          <View style = {styles.lineStyle}/>
          <Text style={styles.body}>Deluxe{"\n\n"}Standard{"\n\n"}Economy</Text>
          <View style = {styles.lineStyle}/>
          <Text style={styles.text}>We also offer a broad range of conference space options!{"\n"}Contact us or visit our site for more information!</Text>

          <TOButton
            title={'Show on Map'}
            onPress={()=>navigate('MultiMap', data.accomodationsPage)}
          />

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
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  body: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
});
