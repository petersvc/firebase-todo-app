import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';

function Loading({navigation, setUser}) {
  function checkLoggedIn() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);

        navigation.navigate('Todo');
      } else {
        navigation.navigate('Login');
      }
    });
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading Screen</Text>
    </View>
  );
}

export default Loading;
