import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import styles from './style';

function Settings() {
  return (
    <View style={styles.settings}>
      <StatusBar backgroundColor="rgba(20, 25, 29, 1)" />
      <Text style={{color: 'white'}}>Settings</Text>
    </View>
  );
}

export default Settings;

// <Text>{lists[0].todos[0].title}</Text>
