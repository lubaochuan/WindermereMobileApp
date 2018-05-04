import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import {data} from '../data/data.js';
import {TOButton} from '../Components/TOButtons.js';

//Displays all information on dining
//Pulls information from data.js
export class DiningHallScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '20%'}}
          source={require('../assets/dining.jpg')}
          />
        <ScrollView>
          <Text style={styles.header}>{"\n"}At Windermere Conference Center, even planners have a choice! We have three great dining opportunities for your group, regular buffet service dining, catered meals, and the Lakeside Grill.</Text>
          <View style = {styles.lineStyle}/>
          <Text style={styles.bodyheader}>Meal Times</Text>
          <Text style={styles.body1}>Breakfast {data.diningPage.breakfastTime}</Text>
          <Text style={styles.body1}>Lunch {data.diningPage.lunchTime}</Text>
          <Text style={styles.body1}>Dinner {data.diningPage.dinnerTime}</Text>

          <Text style={styles.smallprint}>*Arrangements for meals should be made when lodging is reserved. Changes in meal arrangements may be made with 24 hour notice by contacting the Front Desk. No credit is given for missed meals.</Text>

          <TOButton
            title={'Show on Map'}
            onPress={()=>navigate('MultiMap', data.diningPage)}
          />

          <View style = {styles.lineStyle}/>

          {data.diningPage.detail.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <Text style={styles.bodyheader}>{item.header}</Text>
                <Text style={styles.body2}>{item.body}</Text>
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
  header: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  bodyheader: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
  },
  body1:{
    fontSize: 20,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'center',
  },
  body2: {
    fontSize: 18,
    margin: 5,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'left',
    paddingLeft: 5,
  },
  smallprint: {
    fontSize: 10,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    textAlign: 'center',
    paddingLeft: 5,
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
});
