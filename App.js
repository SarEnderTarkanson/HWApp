import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          keyboardType={'email-address'}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your email here'}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          secureTextEntry={true}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder={'Please enter your password here'}
          onChangeText={value => setPassword(value)}
        />
        <Pressable
          style={[
            {backgroundColor: 'black'},
            (!email || !password) && {opacity: 0.5},
          ]}
          disabled={!email || !password}
          onPress={() => {
            console.log('clicked!');
            console.log(email, password);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
