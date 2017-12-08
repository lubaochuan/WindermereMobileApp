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

//Will contain the interactive map, eventually.
//Currently contains a static placeholder image of the windermere campus.

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export class MapScreen extends React.Component {
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
    height: screenHeight,
    width: screenWidth,
    resizeMode: 'stretch',
  }
});
