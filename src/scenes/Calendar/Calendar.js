import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import styles from './style';

function Calendar() {
  return (
    <View style={styles.calendar}>
      <StatusBar backgroundColor="rgba(20, 25, 29, 1)" />
      <Text style={{color: 'white'}}>Calendar</Text>
    </View>
  );
}

export default Calendar;

// <Text>{lists[0].todos[0].title}</Text>
