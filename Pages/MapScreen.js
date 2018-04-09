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

//Will contain the interactive map, eventually.
//Currently contains a static placeholder image of the windermere campus.

//const screenWidth = Dimensions.get('window').width;
//const screenHeight = Dimensions.get('window').height;

export class MapScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      markers: [
        {
          title: "Start Point",
          description: "This is the starting point",
          coordinate: {
            latitude: 38.0326914,
            longitude: -92.8380096,
            latitudeDelta: 0.0080,
            longitudeDelta: 0.0080,
          },
          pinColor: 'red',
        },
        {
          title: "Other Point",
          description: "This is another point",
          coordinate: {
            latitude: 38.0316914,
            longitude: -92.8370096,
          },
          pinColor: 'red',
        },
        {
          title: "The Splash",
          description: "The Splash",
          coordinate: {
            latitude: 38.0334189,
            longitude: -92.8365549,
          },
          pinColor: 'red',
        },
      ],
      region: {
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
          initialRegion={this.state.region}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'
          onRegionChange={ region => this.setState({region}) }
          onRegionChangeComplete={ region => this.setState({region}) }
        >
          <MapView.Marker
            coordinate={this.state.region}
            pinColor={'blue'}
          />
          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
                pinColor={marker.pinColor}
              >

              </MapView.Marker>
            );
          })}

        </MapView>
        <Button
          title={"Reset"}
          onPress={()=>{this.map.animateToRegion(this.state.markers[0].coordinate, 500)}}
        />
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
