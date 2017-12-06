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
import {THButton} from '../Components/THButtons.js';

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
          <THButton
            title='Dining'
            onPress={()=> navigate('Dining')}
          />
          <THButton
            title='Accommodations'
            onPress={()=> navigate('Accommodations')}
          />
          <THButton
            title='Recreation'
            onPress={()=> navigate('Recreation')}
          />
          <THButton
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

});
