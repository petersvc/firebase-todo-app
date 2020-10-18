import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Loading({navigation, setUser, today}) {
  const usersCollection = firestore().collection('users');

  async function addUserInfo(user) {
    await usersCollection.doc(user.email).set(
      {
        nome: user.displayName,
        email: user.email,
        foto: user.photoURL,
      },
      {merge: true},
    );
    /* .then(
        usersCollection.doc(user.email).collection('todos').doc('demo').set(
          {
            title: 'Como adicionar tarefas',
            tag: 'aprender',
            description: 'Clique no botão "+" e insira os detalhes da tarefa',
            begin: '08:00',
            date: today,
            complete: false,
          },
          {merge: true},
        ),
      ); */
  }

  function checkLoggedIn() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        addUserInfo(user);
        navigation.navigate('Tarefas');
      } else {
        navigation.navigate('Login');
      }
    });
  }

  useEffect(() => {
    checkLoggedIn();
    return checkLoggedIn();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading Screen</Text>
    </View>
  );
}

export default Loading;
