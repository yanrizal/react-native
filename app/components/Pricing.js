import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Tile } from 'react-native-elements'

class Pricing extends React.Component {

  render() {

    return (
      <Tile
        imageSrc={require('../public/img/backbone.png')}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
        contentContainerStyle={{height: 70}}
      >
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Caption</Text>
          <Text>Caption</Text>
        </View>
      </Tile>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  label:{

  },
  input:{
    width:'90%',
    marginBottom:20
  },
});

export default Pricing;
