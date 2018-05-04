import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';


//Pulls from data.js to display info
//Policies Screen
export class PoliciesScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '20%'}}
          source={require('../assets/policy.jpg')}
          />
        <ScrollView>
          <Text style={styles.title}>Guest Rules and Policies</Text>
          <Text style={styles.description}>{data.policiesPage.description}</Text>
          <View style = {styles.lineStyle}/>

          {data.policiesPage.detail.map((item, index)=>{
            return (
              <View key={index} style={styles.container}>
                <Text style={styles.head}>{item.head}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          })}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    margin: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'center',
  },
  body: {
    fontSize: 20,
    margin: 5,
    paddingLeft: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  head: {
    fontSize: 22,
    margin: 5,
    paddingLeft: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
});
