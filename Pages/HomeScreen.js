/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  StatusBar
} from 'react-native';
import {TOButton} from '../Components/TOButtons.js';

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'grey'
    },
    headerTitleStyle: {
      fontSize: 20,
      color: 'white'
    }
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
        />
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/WinLogo.png')}
              style={styles.logoImage}
            />
          </View>

          <TOButton
          title='Accommodations'
          onPress={()=> navigate('Accommodations')}
          />
          <TOButton
            title='Dining'
            onPress={()=> navigate('Dining')}
          />
          <TOButton
            title='Recreation'
            onPress={()=> navigate('Recreation')}
          />
          <TOButton
            title='Contact Us'
            onPress={()=>navigate('Contact')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'grey'
  },
  body: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
  },
  logoImage: {
    //marginBottom: 50,
    resizeMode: 'contain',
    width: '100%',
    tintColor: 'grey',
  }

});
