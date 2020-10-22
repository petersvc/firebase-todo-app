import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-community/google-signin';

import SignIn from '../pages/SignIn/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '165120130538-5hqsenrqndj1fhi6hn4k4qlk5udvtseu.apps.googleusercontent.com',
    });
  }, []);

  return (
    <AuthStack.Navigator headerShown={false} headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
