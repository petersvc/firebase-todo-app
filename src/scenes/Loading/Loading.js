import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';

function Loading({navigation, setUser, googleUser}) {
  function checkLoggedIn() {
    auth().onAuthStateChanged((user) => {
      if (user && googleUser) {
        setUser(user.email);

        navigation.navigate('Tarefas');
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
