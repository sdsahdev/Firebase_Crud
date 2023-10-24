

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppSecond from './screens/AppSecond';
import Crudscreen from './screens/Crudscreen';
import AllFunctions from './screens/AllFunctions';
import Try from './screens/Try';
import All from './screens/AllFunctions';
import ApiCall from './screens/APIScreens/ApiCall';
import GoogleSignin from './screens/GoogleSignin';



const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* <AppSecond /> */}
      {/* <Try /> */}

      {/* <ApiCall/> */}
      <AllFunctions />
      {/* <GoogleSignin/> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});


export default MyComponent;
