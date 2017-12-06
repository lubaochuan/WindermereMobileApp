import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';

export class THButton extends React.Component {


  render(){
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.highlight}
        >
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '98%',
    margin:5,
    backgroundColor: 'grey',
  },
  highlight: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    margin: 10,
  }
});
