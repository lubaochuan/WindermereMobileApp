import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import { MapView } from 'expo';
import { data } from '../data/data.js';

/*
This map component takes an array of objects containing coordinates from its props and maps them as markers on a mapview.
*/

export class MultiMapScreen extends React.Component {


  render() {
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;

    return (
      <View style={{flex:1}}>
        <MapView
          ref={map => this.map = map}
          initialRegion={params.initialRegion}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'
        >
          {params.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
              >

              </MapView.Marker>
            );
          })}

        </MapView>

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
