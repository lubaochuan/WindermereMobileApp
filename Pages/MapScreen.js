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
This is the combined map page.
This page contains all markers present in all other instances of campus maps.
Pulls markers from data object from accommodations, dining, and recreation.
*/


export class MapScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      initialRegion: {
        latitude: 38.0326914,
        longitude: -92.8380096,
        latitudeDelta: 0.0080,
        longitudeDelta: 0.0080,
      },
    };
  }


  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.initialRegion}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'
        >
          {data.recPages.map((activity, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={activity.coordinate}
                title={activity.title}
                pinColor={'#f79626'}
              />
            );
          })}

          {data.accomodationsPage.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                pinColor={'#0061aa'}
              />
            );
          })}

          {data.diningPage.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                pinColor={'#006f53'}
              />
            );
          })}




        </MapView>


      </View>
    );
  }

}//Class

/*
<Button
  title={"Reset"}
  onPress={()=>{this.map.animateToRegion(this.state.markers[0].coordinate, 500)}}
/>
*/

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
