import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import styles from './style';

function Skills() {
  return (
    <View style={styles.calendar}>
      <StatusBar backgroundColor="rgba(20, 25, 29, 1)" />
      <Text style={{color: 'white'}}>Skills</Text>
    </View>
  );
}

export default Skills;

// <Text>{lists[0].todos[0].title}</Text>
