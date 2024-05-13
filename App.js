import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Switch,
  View,
  Alert,
} from 'react-native';

const App = () => {
  const [name, setName] = useState(' ');
  const [age, setAge] = useState(' ');
  const [showUserInfo, setSHowUserInfo] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#efdb96', flex: 1}}>
      <ScrollView>
        <TextInput
          style={styles.ImputContainer}
          placeholder="please enter your name"
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.ImputContainer}
          placeholder="please enter your age"
          onChangeText={value => setAge(value)}
          keyboardType="numeric"
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Switch
            value={showUserInfo}
            onValueChange={() =>
              setSHowUserInfo(previousState => !previousState)
            }
          />
          <Text>show my info </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={
            showUserInfo
              ? () => Alert.alert('Hi ' + name + ' your age is ' + age)
              : () => Alert.alert('your informations are confidential')
          }>
          <Text style={{fontSize: 20}}> enter </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImputContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#eae6da',
  },

  button: {
    backgroundColor: '#84a295',
    padding: 10,
    borderRadius: 5,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
