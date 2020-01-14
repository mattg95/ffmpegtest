import React, {useState} from 'react';
import {Image, View} from 'react-native';

export default class Picture extends React.Component {
  state = {
    image: require(`../img001.jpg`),
  };
  render() {
    return (
      <View>
        <Image source={this.state.image} />;
      </View>
    );
  }
}
