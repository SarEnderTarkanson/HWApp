import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue'}}>
        <Text>This is going to be our header container</Text>
      </View>
      <View style={{backgroundColor: 'grey'}}>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>All Rights Reserved</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
