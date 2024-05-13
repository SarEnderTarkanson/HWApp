import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
  Switch,
  View,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
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
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={shouldKeepLoggedIn}
            onValueChange={value => setShouldKeepLoggedIn(value)}
          />
          <Text>Keep me logged in</Text>
        </View>
        <TouchableOpacity
          style={[
            {backgroundColor: 'black'},
            (!email || !password) && {opacity: 0.5},
          ]}
          disabled={!email || !password}
          onPress={() => {
            console.log('clicked!');
            console.log(email, password, shouldKeepLoggedIn);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
