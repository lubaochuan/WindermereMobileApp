import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

export class PageHeader extends React.Component {
  render(){

    return(
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.headerContainer}
          onPress={this.props.onPress}>
          <Image
            source={require('../assets/drawer.png')}
            style={styles.drawerIcon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 60,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    width: 30,
    height: 30,
    padding: 10,
    margin: 3,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerIcon:{
    width: 30,
    height: 30,
  },
});
