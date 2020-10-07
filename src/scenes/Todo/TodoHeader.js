import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

function TodoHeader({headerTitle, navigation, signOut}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[{marginLeft: -4}, styles.menuIcon]}
        onPress={navigation.toggleDrawer}>
        <Icon
          name="menu"
          size={styles.icon.size + 8}
          color={styles.colors.white}
        />
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, styles.headerTitle]}>
        {headerTitle}
      </Text>
      <View style={styles.rightSide}>
        <TouchableOpacity style={styles.pomodoro}>
          <Icon
            name="ios-basket-outline"
            size={styles.icon.size + 3}
            color={styles.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pomodoro}>
          <Icon
            name="ios-stopwatch-outline"
            size={styles.icon.size + 3}
            color={styles.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[{marginLeft: -5, marginRight: -7}]}>
          <Icon
            name="ios-ellipsis-vertical"
            size={styles.icon.size}
            color={styles.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoHeader;

/*
<Icon
          name="md-reorder-two-outline"
          size={styles.icon.size + 25}
          color={styles.icon.color}
        />
        <TouchableOpacity>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')}
          />
        </TouchableOpacity>
      <TouchableOpacity
      // onPress={navigation.toggleDrawer}
      >
        <Icon
          name="ios-ellipsis-vertical"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
      </TouchableOpacity>
<Text style={[styles.sectionTitle, styles.headerTitle]}>Today</Text>
      <Text style={[styles.sectionTitle, styles.headerTitle2]}>
        September 19
      </Text>
<Text style={[styles.title, styles.remaining]}>
        You have {remaining} tasks today.
      </Text>
style={{marginLeft: 'auto'}}
      <View style={styles.rightSide}>
        <TouchableOpacity
          style={styles.pomodoro}
          onPress={navigation.toggleDrawer}>
          <Icon
            name="ios-file-tray-full-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pomodoro}>
          <Icon
            name="person-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.remaining}>{remaining}</Text>
<TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon
          name="ios-menu"
          size={styles.icon.size - 18}
          color={styles.icon.color}
        />
      </TouchableOpacity>
      <Text style={[styles.sectionTitle, styles.headerTitle]}>
        {headerTitle}
      </Text>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon
          name="ios-ellipsis-vertical"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>



*/
