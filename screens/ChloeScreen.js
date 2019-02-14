import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import styles from '../styles/styles';


export default class Chloe extends Component {
  render() {
    return (
      <ScrollView
        style={ {styles} }
        minimumZoomScale={1}
        maximumZoomScale={5}
        bouncesZoom={true}
      >
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/1833SLc.png" }} />
          <Text style={styles.text}>Hi! I'm Chloe!</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/ARVzzL6.png" }} />
          <Text style={styles.textTwo}>Treats and toys makes me happy!</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/XsPHVFw.png" }} />
          <Text style={ {fontWeight: 'bold', fontSize: 55} }>Let's play outside!</Text>
        <Button
          title='Next'
          onPress={() => this.props.navigation.navigate('TextCounter')}
          size={40}
        />
      </ScrollView>
    );
  }
}
