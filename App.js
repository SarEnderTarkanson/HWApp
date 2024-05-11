import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Checking if component should update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Getting snapshot before component update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component has updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
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
