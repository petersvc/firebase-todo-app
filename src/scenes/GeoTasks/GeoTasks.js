import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import styles from './style';

function GeoTasks() {
  return (
    <View style={styles.calendar}>
      <StatusBar backgroundColor="rgba(20, 25, 29, 1)" />
      <Text style={{color: 'white'}}>GeoTasks</Text>
    </View>
  );
}

export default GeoTasks;
