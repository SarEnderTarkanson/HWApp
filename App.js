import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
//import MyText from './components/MyText/MyText';

const App = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    console.log(text);
  }, [text]);

  useEffect(() => {
    console.log('The component has rendered!');
  }, []);
  return (
    <SafeAreaView>
      <Text onPress={() => setText(text + 1)}>{text}</Text>
    </SafeAreaView>
  );
};

export default App;
