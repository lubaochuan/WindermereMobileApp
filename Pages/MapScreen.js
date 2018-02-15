import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import { MapView } from 'expo';

//Will contain the interactive map, eventually.
//Currently contains a static placeholder image of the windermere campus.

//const screenWidth = Dimensions.get('window').width;
//const screenHeight = Dimensions.get('window').height;

export class MapScreen extends React.Component {
/*
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.mapImage}
          source={require('../assets/map.jpg')}
        />
      </View>
    );
  }
*/
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 38.0326914,
          longitude: -92.8380096,
          latitudeDelta: 0.0080,
          longitudeDelta: 0.0080,
        }}
        mapType="hybrid"
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    //backgroundColor: 'lightgrey'
  },
  text: {
    fontSize: 30,
    color: 'grey'
  },
  mapImage: {
    flex: 1,
    //height: screenHeight,
    //width: screenWidth,
    resizeMode: 'stretch',
  }
});
