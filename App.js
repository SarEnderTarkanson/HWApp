/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'baseline',
      }}>
      <View
        style={{
          backgroundColor: 'yellow',
          width: 50,
          height: 50,
        }}></View>
      <View
        style={{
          backgroundColor: 'green',
          width: 50,
          height: 50,
        }}></View>
      <View
        style={{
          backgroundColor: 'black',
          width: 50,
          height: 50,
        }}></View>
    </View>
  );
};

export default App;
