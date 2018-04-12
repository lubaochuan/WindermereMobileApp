/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  StatusBar,
  FlatList
} from 'react-native';
import {TOButton} from '../Components/TOButtons.js';

//Current Home page.
//Contains buttons to other pages/page groups in stacks.
//Available pages should be along the lines of a kind of 'quick access' pages.
export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#2C4500'
    },
    headerTitleStyle: {
      fontSize: 20,
      color: 'white'
    }
  };

  //Renders Windermere Logo, then
  //Renders Buttons to pages and page-groups.s
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

          <FlatList
            style={{width: '100%'}}
            data={[
              {
                key: 'Accommodations',
                nav: 'Accommodations'
              },
              {
                key: 'Dining',
                nav: 'Dining'
              },
              {
                key: 'Recreation',
                nav: 'Recreation'
              },
              {
                key: 'Contact Us',
                nav: 'Contact'
              }
            ]}
            renderItem={
              ({item}) => <TOButton
              title={item.key}
              onPress={()=>navigate(item.nav)}
              />
            }
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
    //tintColor: 'grey',
  }

});
