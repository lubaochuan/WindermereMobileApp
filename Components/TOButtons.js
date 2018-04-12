import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

//This is a simple component that returns a TouchableOpacity with a Text inside.
//onPress function and Text content is passed in through props of TOButton.

//T_ouchable_O_pacity_Button
export class TOButton extends React.Component {

  render(){
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.highlight}
        >
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
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
    backgroundColor: '#2C4500',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    margin: 10,
  }
});
