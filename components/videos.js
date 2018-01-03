import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import videoData2 from '../assets/videoData.json';

const videos = props => {
  intToString = value => {
    let newValue = value;
    if (value >= 1000) {
      let suffixes = ['', 'K', 'M', 'B', 'T'];
      let suffixNum = Math.floor(('' + value).length / 3);
      let shortValue = '';
      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        let dotLessShortValue = (shortValue + '').replace(
          /[^a-zA-Z 0-9]+/g,
          ''
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue + ' views';
  };

  convertTime = time => {
    let date = new Date(time).getTime();
    let currentDate = new Date().getTime();
    return formatTime(currentDate, date);
  };

  formatTime = (current, previous) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
      return Math.round(elapsed / msPerYear) + ' years ago';
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.videoData.snippet.thumbnails.medium.url }}
        style={{ height: 200 }}
      />
      <View style={styles.description}>
        <Image
          source={{
            uri:
              'http://e-cdn-images.deezer.com/images/artist/b2af40d06fb0ccaf3ebee179f61cd80d/200x200-000000-80-0-0.jpg'
          }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View style={styles.videoStats}>
          <Text style={styles.videoTitle}>{props.videoData.snippet.title}</Text>
          <Text style={styles.videoStat}>
            {props.videoData.snippet.channelTitle +
              ' · ' +
              intToString(props.videoData.statistics.viewCount) +
              ' · ' +
              convertTime(props.videoData.snippet.publishedAt)}
          </Text>
        </View>
        <TouchableOpacity style={{ paddingTop: 15 }}>
          <Icon name="more-vert" size={20} color="#999999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  description: {
    flexDirection: 'row',
    paddingTop: 15
  },

  videoStats: {
    paddingHorizontal: 15,
    flex: 1
  },
  videoTitle: {
    fontSize: 16,
    color: '#3c3c3c'
  },
  videoStat: {
    paddingTop: 3
  }
});

export default videos;
