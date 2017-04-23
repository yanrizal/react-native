import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { SearchBar, Divider } from 'react-native-elements';

class Cards extends React.Component {

  render() {
    const users = [
       {
          name: 'brynn',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
       },
      ]

    return (
      <View>
      <Divider style={{ backgroundColor: '#CCC',marginTop:20 }} />
      <SearchBar
      lightTheme
      placeholder='Type Here...' />
      </View>
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

export default Cards;
