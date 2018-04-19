import React, { Component } from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';

//This is a screen component that takes in a data object as a prop,
//and uses this prop for page title and details on screen.
//This functionality will be expanded upon when we populate the recreation pages with all their relevant information.
//Using a data object prop will allow us to get this information from outside the app and pass it in,
//so data could feasibly be changed without updating the app.
export class RecDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) =>  ({
    title: `${navigation.state.params.key}`,
  });

  render(){
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.detailheader}>{params.when}</Text>
        <Text style={styles.text}>{params.whendetail}</Text>
        <Text style={styles.detailheader}>{params.where}</Text>
        <Text style={styles.text}>{params.wheredetail}</Text>
        <Text style={styles.detailheader}>{params.how}</Text>
        <Text style={styles.text}>{params.howdetail}</Text>
        <Text style={styles.detailheader}>{params.time}</Text>
        <Text style={styles.text}>{params.timedetail}</Text>
        <View style = {styles.lineStyle}/>
        <Text style={styles.header}>{params.header1}</Text>
        <Text style={styles.body}>{params.body1}</Text>
        <Text style={styles.header}>{params.header2}</Text>
        <Text style={styles.body}>{params.body2}</Text>
        <View style = {styles.lineStyle}/>
        <Text style={styles.detailheader}>{params.when2}</Text>
        <Text style={styles.text}>{params.whendetail2}</Text>
        <Text style={styles.detailheader}>{params.where2}</Text>
        <Text style={styles.text}>{params.wheredetail2}</Text>
        <Text style={styles.detailheader}>{params.how2}</Text>
        <Text style={styles.text}>{params.howdetail2}</Text>
        <Text style={styles.detailheader}>{params.time2}</Text>
        <Text style={styles.text}>{params.timedetail2}</Text>
        <TOButton
          title={'Show ' + params.key + ' on map'}
          onPress={()=>navigate('SingleMap', params.coordinate)}
        />
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
  text: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  header:{
    fontSize: 25,
    margin: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 20,
    margin: 5,
    paddingLeft: 5,
    fontFamily: 'Arial',
  },
  detailheader: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  lineStyle:{
    borderWidth: 1,
    borderColor: '#2C4500',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
