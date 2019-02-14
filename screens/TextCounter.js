import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class TextCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: 0
    };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Example Text Input"
          onChangeText={ (text) => this.setState({ text, count: this.state.count + 1 }) }
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.count}
        </Text>
      </View>
    );
  }
}