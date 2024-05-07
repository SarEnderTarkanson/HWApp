import React, {useState} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {ThemeContext} from './contexts/ThemeContext';
import Homescreen from './components/Homescreen/Homescreen';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? 'gray' : 'white'}}>
          <Text style={{color: isDarkMode ? 'white' : 'black'}}>
            Hello World!
          </Text>
        </View>
        <Button title={'Switch Mode'} onPress={toggleTheme} />

        <Homescreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
