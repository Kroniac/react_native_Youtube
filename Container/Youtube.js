import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Video from '../components/videos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import youtubeImage from '../assets/youtube_logo.png';
import videoData from '../assets/videoData.json';
import TabBarContent from '../components/TabBarContent/TabBarContent';
import NavBarContent from '../components/NavBarContent/NavBarContent';

class Youtube extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={youtubeImage} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
            <NavBarContent iconName="videocam" />
            <NavBarContent iconName="search" />
            <NavBarContent iconName="account-circle" />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={videoData.items}
            renderItem={video => <Video videoData={video.item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.tabBar}>
          <TabBarContent iconName="home" name="Home" />
          <TabBarContent iconName="whatshot" name="Trending" />
          <TabBarContent iconName="subscriptions" name="Subscriptions" />
          <TabBarContent iconName="notifications" name="Activity" />
          <TabBarContent iconName="folder" name="Library" />
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
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 50,
    borderTopWidth: 0.5,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Youtube;
