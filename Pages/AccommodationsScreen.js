import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';


//Placeholder for Accommodations Screen.
export class AccommodationsScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <FlatList
            style={{width: '100%'}}
            data={data.accommodationsPages}
            renderItem={
              ({item}) => <TOButton
              title={item.key}
              onPress={()=>navigate('RecDetail', item)}
              />
            }
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'ArialHebrew-Light',
    margin: 30,
  },
  body: {
    width: '100%',
    flex: 1,
    margin: 5,
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
    tintColor: 'grey',
  }
})
