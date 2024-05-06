import React from 'react';
import {Text} from 'react-native';
import style from './Style';

const MyText = () => {
  const handleTextClick = () => {
    alert('The Text has been Clicked');
  };
  return (
    <Text style={style.text} onPress={() => handleTextClick()}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;
