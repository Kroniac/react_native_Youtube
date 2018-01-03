import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabBarContent = props => (
  <TouchableOpacity style={styles.tabItem}>
    <Icon name={props.iconName} size={24} />
    <Text style={styles.tabText}>{props.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 10,
    color: '#3c3c3c',
    paddingTop: 5
  }
});

export default TabBarContent;
