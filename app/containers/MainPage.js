import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';
import ListContact from '../components/ListContact'
import Pricing from '../components/Pricing'
import Cards from '../components/Card'

class MainPage extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedTab: 'profile',
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render() {
    const { selectedTab } = this.state

    return (
      <Tabs>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
          onPress={() => this.changeTab('feed')}>
          <ListContact />
        </Tab>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('profile')}>
          <Pricing />
        </Tab>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'card'}
          title={selectedTab === 'card' ? 'CARD' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='g-translate' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='g-translate' size={30} />}
          onPress={() => this.changeTab('card')}>
          <Cards />
        </Tab>
      </Tabs>
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

export default MainPage;
