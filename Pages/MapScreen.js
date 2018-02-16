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

  constructor() {
    super();

    this.state = {
      region: {
        latitude: 38.0326914,
        longitude: -92.8380096,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080,
      },
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <MapView
          style={{flex: 1}}
          mapType='hybrid'
          region={this.state.region}
          onRegionChange={ region => this.setState({region}) }
          onRegionChangeComplete={ region => this.setState({region}) }
        >
          <MapView.Marker
            title='Marker'
            description="I'm a marker! Neat!"
            coordinate={ this.state.region }
          />
        </MapView>
        <Text>Lat: {this.state.region.latitude}</Text>
        <Text>Long: {this.state.region.longitude}</Text>
        <Text>dLat: {this.state.region.latitudeDelta}</Text>
        <Text>dLong: {this.state.region.longitudeDelta}</Text>
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
    //height: screenHeight,
    //width: screenWidth,
    resizeMode: 'stretch',
  }
});
