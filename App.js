import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './styles/styles';
import MilaScreen from './screens/MilaScreen';
import DougScreen from './screens/DougScreen';
import ChloeScreen from './screens/ChloeScreen';
import TextCounter from './screens/TextCounter';



class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeText}>Pup App Demo</Text>
        <Button
          title='See Pups!'
          onPress={() => this.props.navigation.navigate('MilaScreen')}
          size={40}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  MilaScreen: MilaScreen,
  DougScreen: DougScreen,
  ChloeScreen: ChloeScreen,
  TextCounter: TextCounter
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);

