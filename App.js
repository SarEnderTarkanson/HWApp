import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Text
          onPress={() => {
            this.setState({name: 'Alpy'});
          }}>
          Hello, {this.state?.name} !
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
