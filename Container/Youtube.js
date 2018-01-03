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
import axios from 'axios';
import * as keys from '../components/Keys/keys';
import Video from '../components/videos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import youtubeImage from '../assets/youtube_logo.png';
import TabBarContent from '../components/TabBarContent/TabBarContent';
import NavBarContent from '../components/NavBarContent/NavBarContent';

class Youtube extends Component {
  state = {
    videoData: null
  };
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${
          keys.youtubeApiKey
        }`
      )
      .then(res => {
        this.setState({ videoData: res.data.items });
      });
  }

  render() {
    let list = this.state.videoData ? (
      <FlatList
        data={this.state.videoData}
        renderItem={video => <Video videoData={video.item} />}
        keyExtractor={item => item.id}
      />
    ) : (
      <Text>Loading..</Text>
    );
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
        <View style={styles.body}>{list}</View>
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
