import React from 'react';
import {View} from 'react-native';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(50,50,50)',
      }}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleLogin}
      />
    </View>
  );
}

export default Login;
