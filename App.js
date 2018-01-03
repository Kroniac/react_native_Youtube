import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import youtubeImage from './assets/youtube_logo.png';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={youtubeImage} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
            <Icon style={styles.navItem} name="search" size={25} />
            <Icon style={styles.navItem} name="account-circle" size={25} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem:{
    marginLeft:25
  }
});

export default App;
