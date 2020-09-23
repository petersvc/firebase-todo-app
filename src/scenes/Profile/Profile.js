import React from 'react';
import {View, StatusBar, Text} from 'react-native';

import styles from './style';

function Profile() {
  return (
    <View style={styles.profile}>
      <StatusBar backgroundColor="rgba(20, 25, 29, 1)" />
      <Text style={{color: 'white'}}>Profile</Text>
    </View>
  );
}

export default Profile;

// <Text>{lists[0].todos[0].title}</Text>
