import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Image,
} from 'react-native';

import {TOButton} from '../Components/TOButtons.js';
import {data} from '../data/data.js';
//import {recreations} from '../data/RecData.js';


//This is the Recreations Page.  It display all the available recreation events available on campus.
//The list of events is pulled from the RecData.js object 'recreations'.
export class RecreationsScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;

    return(
      <View style={styles.container}>
      <Image
        style={{width: '100%', height: '20%'}}
        source={require('../assets/recreation.jpg')}
        />

        <View style={styles.body}>

         <Text style={styles.text}>Activities</Text>
          <FlatList
            style={{width: '100%'}}
            data={data.recPages}
            renderItem={
              ({item}) => <TOButton
              title={item.key}
              onPress={()=>navigate('RecDetail', item)}

              />
            }
          />
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
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'ArialHebrew-Light' : 'sans-serif-medium',
    margin: 30,
  },
  body: {
    width: Platform.OS === 'ios' ? '100%' : '95%',
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
