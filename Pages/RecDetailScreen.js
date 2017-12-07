import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class RecDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) =>  ({
    title: `${navigation.state.params.key}`,
  });

  render(){
    //const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{params.detail}</Text>
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
    fontSize: 30,
    color: 'grey'
  }
});
