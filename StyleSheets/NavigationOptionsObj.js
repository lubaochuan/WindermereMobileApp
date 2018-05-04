import {StyleSheet} from 'react-native';

/*
title ----------------------- pretty self explanatory
headerTitleStyle ------------ again, obvious
headerBackTitleStyle -------- style for the text next to back navigation Button
headerTintColor ------------- color of the back 'arrow' in iOS, unsure what it changes in android
headerStyle ----------------- style for the header container
headerLeft ------------------ what to display for the left element of header, defaults to back element, setting to null will show nothing (used for home Screen)
*/


export function navOptions(t, back){
  if(back === true)
  {
    return({
      title: t,
      headerTitleStyle: {color: '#2C4500'},
      headerBackTitleStyle: {color: '#2C4500'},
      headerTintColor: '#2C4500',
      headerStyle: {backgroundColor: "#cccccc"},
    });
  }

  else
  {
    return({
      title: t,
      headerTitleStyle: {color: '#2C4500'},
      headerStyle: {backgroundColor: "#cccccc"},
      headerLeft: null,
    });
  }
}
