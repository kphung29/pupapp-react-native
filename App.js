import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './styles/styles';
import Mila from './screens/Mila';
import Doug from './screens/Doug';
import Chloe from './screens/Chloe';
import TextCounter from './screens/TextCounter';



class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Puppy App</Text>
        <Button
          title='See Pups!'
          onPress={() => this.props.navigation.navigate('Mila')}
          size={40}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Mila: Mila,
  Doug: Doug,
  Chloe: Chloe,
  TextCounter: TextCounter
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);

