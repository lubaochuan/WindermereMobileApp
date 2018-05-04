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
      <Text style={styles.header}>{data.policiesPage[0].header}</Text>
      <Text style={styles.headerBody}>{data.policiesPage[0].body}</Text>
      <View style = {styles.lineStyle}/>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].alcHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].alcBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].fireHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].fireBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].curfHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].curfBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].dressHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].dressBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].firearmHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].firearmBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].foodHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].foodBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].resHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].resBody}</Text>
      <Text style={styles.body}>{data.policiesPage[0].resBody2}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].lakeHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].lakeBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].lostHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].lostBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].medHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].medBody}</Text>
      <Text style={styles.body}>{data.policiesPage[0].medBody2}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].mailHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].mailBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].petHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].petBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].photoHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].photoBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].rollHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].rollBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].rvHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].rvBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].smokeHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].smokeBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].trashHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].trashBody}</Text>
      <Text style={styles.bodyHeader}>{data.policiesPage[0].vehHeader}</Text>
      <Text style={styles.body}>{data.policiesPage[0].vehBody}</Text>
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
  header:{
    fontSize: 25,
    margin: 10,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerBody: {
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
  bodyHeader: {
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
