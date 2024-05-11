import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'white',
          padding: 10,
          borderRadius: 4,
        }}
        value={textValue}
        onChangeText={value => {
          console.log(value);
          setTextValue(value);
        }}
        autoFocus={true}
        placeholder="Please enter your name"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'white',
          padding: 10,
          borderRadius: 4,
        }}
        value={email}
        onChangeText={value => {
          console.log(value);
          setEmail(value);
        }}
        returnKeyType={'search'}
        keyboardType={'email-address'}
        autoFocus={true}
        placeholder="Please enter your email"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'white',
          padding: 10,
          borderRadius: 4,
        }}
        value={passwordValue}
        onChangeText={value => {
          console.log(value);
          setPasswordValue(value);
        }}
        keyboardType={'phone-pad'}
        secureTextEntry={true}
        autoFocus={true}
        placeholder="Please enter your password"
      />
    </SafeAreaView>
  );
};

export default App;
