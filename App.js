import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  let array = Array(1000).fill(0);
  const scrollViewRef = useRef(null);
  const handleClick = () => {
    scrollViewRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollViewRef}>
        {array.map((value, index) => (
          <Text key={index}>Hello World!   {index}</Text>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Scroll to Top" onPress={handleClick} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
  },
});

export default App;
