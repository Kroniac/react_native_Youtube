import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import youtubeImage from './assets/youtube_logo.png';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={youtubeImage} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
          <TouchableOpacity>
              <Icon style={styles.navItem} name="videocam" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.body}>
          
          </View>
          <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={24}/>
          <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
          <Icon name="whatshot" size={24}/>
          <Text style={styles.tabText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
          <Icon name="subscriptions" size={24}/>
          <Text style={styles.tabText}>subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
          <Icon name="notifications" size={24}/>
          <Text style={styles.tabText}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
          <Icon name="folder" size={24}/>
          <Text style={styles.tabText}>Library</Text>
          </TouchableOpacity>
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
  navItem: {
    marginLeft: 25
  },
  body: {
    flex:1
  },
  tabBar: {
    backgroundColor: 'white',
    height:50,
    borderTopWidth: 0.5,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent : 'space-around'
  },
  tabItem:{
    alignItems:'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 10,
    color : '#3c3c3c',
    paddingTop: 5
  }
});

export default App;
