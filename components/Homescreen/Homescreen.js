import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext';

const Homescreen = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: isDarkMode ? 'gray' : 'white'}}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>
        Welcome to my Homescreen
      </Text>
    </View>
  );
};

export default Homescreen;
