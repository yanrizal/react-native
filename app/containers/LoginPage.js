import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import axios from 'axios';

class LoginPage extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChangeUsername = e => {
    this.setState({
      username: e.toLowerCase()
    })
  }

  handleChangePassword = e => {
    this.setState({
      password: e.toLowerCase()
    })
  }

  handleSubmit = e => {
    const { navigator } = this.props;
    axios.post('http://192.168.1.3:7777/api/v1/login', {
      "username":this.state.username,
      "password":this.state.password
    })
    .then(function (response) {
      console.log(response);
      if(response.data.status === 'OK'){
        navigator.push({
            id: 'MainPage',
        });
      } else {
        alert('failed')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel containerStyle={styles.label}>Username</FormLabel>
        <FormInput containerStyle={styles.input} onChangeText={this.handleChangeUsername}/>
        <FormLabel>Password</FormLabel>
        <FormInput containerStyle={styles.input} onChangeText={this.handleChangePassword}/>
        <Button title='LOGIN' onPress={this.handleSubmit} />
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

export default LoginPage;
