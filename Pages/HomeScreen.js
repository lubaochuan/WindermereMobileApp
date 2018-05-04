/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  TouchableHighlight,
  Image,
  StatusBar,
  ScrollView
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
    fontFamily: Platform.OS === 'ios' ? 'ArialHebrew-Light' : 'sans-serif-medium',
      color: 'white'
    }
  };

  constructor() {
    super();

    this.state = {
      data: [
        {
          title: 'Accommodations',
          nav: 'Accommodations',
        },
        {
          title: 'Dining',
          nav: 'Dining',
        },
        {
          title: 'Recreation',
          nav: 'Recreation',
        },
        {
          title: 'Campus Map',
          nav: 'Map',
        },
        {
          title: 'Guest Policies',
          nav: 'Policies',
        },
        {
          title: 'Contact Us',
          nav: 'Contact',
        },
      ],
    }
  }

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

          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{alignItems: 'center'}}
          >

            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/WinLogo.png')}
                style={styles.logoImage}
              />
            </View>

            {this.state.data.map((item, index) => {
              return(
                <TOButton
                  key={index}
                  title={item.title}
                  onPress={()=>navigate(item.nav)}
                />
              );
            })}

          </ScrollView>



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
    width: Platform.OS === 'ios' ? '100%' : '95%',
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
