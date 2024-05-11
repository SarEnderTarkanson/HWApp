import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import style from './Style';

const MyText = props => {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    console.log('Our component has been mounted');
    return () => {
      console.log('Our component is no being destroyed');
    }
  }, []);

  useEffect(() => {
    console.log('The value of the fullname has been updated');
  }, [])
  return (
    <Text
      style={[style.text, style.text1, {color: 'green'}]}
      onPress={() => {
        setFullName('Alpy Tarkanson');
      }}>
      Hello, {props.name}! I know that your fullname is{fullName}
    </Text>
  )
};

export default MyText;
