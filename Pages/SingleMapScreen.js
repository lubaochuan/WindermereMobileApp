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

export class SingleMapScreen extends React.Component {

  render() {

    return (
      <View style={{flex:1}}>
        <MapView
          initialRegion={{
            latitude: this.props.navigation.state.params.latitude,
            longitude: this.props.navigation.state.params.longitude,
            latitudeDelta: 0.0080,
            longitudeDelta: 0.0080,
          }}
          style={{flex: 1}}
          mapType='hybrid'
          showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.props.navigation.state.params.latitude,
              longitude: this.props.navigation.state.params.longitude,
            }}
          />
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
