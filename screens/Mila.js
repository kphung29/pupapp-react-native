import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import styles from '../styles/styles';


export default class Mila extends Component {
  render() {
    return (
      <ScrollView
        style={{styles}}
        minimumZoomScale={1}
        maximumZoomScale={5}
        bouncesZoom={true}
      >
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/YNaFOcj.jpg" }} />
          <Text style={styles.text}>Hi! I'm Mila and I am 3 years old.</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/nRCP2Uf.jpg" }} />
          <Text style={styles.textTwo}>I love to eat!</Text>
        <Image style={styles.image} source={{ uri: "https://i.imgur.com/Ep45nX3.jpg?1" }} />
          <Text style={ {fontWeight: 'bold', fontSize: 55} }>I love sleep and then eat some more!</Text>
        <Button
          title='Next Pup'
          onPress={() => this.props.navigation.navigate('Doug')}
          size={40}
        />
      </ScrollView>
    );
  }
}
