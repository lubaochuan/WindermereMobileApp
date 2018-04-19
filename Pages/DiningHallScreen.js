import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';

//Displays all information on dining
//Pulls information from data.js
export class DiningHallScreen extends React.Component {

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>{params.detail}</Text>
        <FlatList
          style={{width: '100%'}}
          data={data.diningPage}
          renderItem={
            ({item}) => <TOButton
            title={item.key}
            onPress={()=>navigate('DineDetail', item)}
            />
          }
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
    fontSize: 23,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  }
});
