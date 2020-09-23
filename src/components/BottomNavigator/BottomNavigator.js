import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

function BottomNavigator() {
  return (
    <>
      <View style={styles.spotted} />
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon
            style={styles.iconItem}
            name="ios-list-outline"
            size={styles.icon.size}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon
            style={styles.iconItem}
            name="calendar-outline"
            size={styles.icon.size - 4}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon
            style={styles.iconItem}
            name="ios-person-outline"
            size={styles.icon.size - 4}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon
            style={styles.iconItem}
            name="settings-outline"
            size={styles.icon.size - 4}
            color={styles.icon.color}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
// todo, calendar, profile, settings
export default BottomNavigator;
