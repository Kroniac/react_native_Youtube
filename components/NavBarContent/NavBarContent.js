import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBarContent = props => (
  <TouchableOpacity>
    <Icon style={styles.navItem} name={props.iconName} size={25} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  navItem: {
    marginLeft: 25
  }
});

export default NavBarContent;
