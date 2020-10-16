/* eslint-disable global-require */
import React from 'react';
import {View, StatusBar, Text, Image, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

GoogleSignin.configure({
  webClientId:
    '165120130538-5hqsenrqndj1fhi6hn4k4qlk5udvtseu.apps.googleusercontent.com',
});

function Login({setGoogleUser}) {
  const googleLogin = async () => {
    const userInfo = await GoogleSignin.signIn();
    setGoogleUser(userInfo.user);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.login}>
      <StatusBar backgroundColor="rgba(27, 31, 36, 1)" />
      <View style={styles.top}>
        <Image
          style={styles.loginImg}
          source={require('../../assets/acc7.png')}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.welcome}>Bem vindo ao Todots</Text>
        <Text style={[styles.title, styles.textItem]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={googleLogin}>
          <Icon
            name="logo-google"
            size={styles.icon.size}
            color={styles.colors.main}
          />
          <Text
            style={[
              styles.title,
              {
                fontWeight: 'bold',
                color: styles.colors.main,
                marginLeft: 10,
              },
            ]}>
            Login com Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

/*
'rgba(29, 34, 38, 1)',
      <GoogleSigninButton
        // style={{width: 230, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleLogin}
      />

*/
