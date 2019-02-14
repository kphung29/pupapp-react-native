import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import styles from '../styles/styles'


export default class Doug extends Component {
  render() {
    return (
      <ScrollView
        style={{styles}}
        minimumZoomScale={1}
        maximumZoomScale={5}
        bouncesZoom={true}
      >
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/p4BMVJd.png" }} />
          <Text style={styles.text}>Hi! Doug Here!</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/FnHo0tG.png" }} />
          <Text style={styles.textTwo}>I love stay in bed and cuddle!</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/sDr8Pa1.png" }} />
          <Text style={{fontWeight: 'bold', fontSize: 55}}>I'm always bundled up!</Text>
        <Button
          title='Next Pup'
          onPress={() => this.props.navigation.navigate('ChloeScreen')}
          size={40}
        />
      </ScrollView>
    );
  }
}
