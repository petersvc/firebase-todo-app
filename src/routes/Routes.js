import React, { useContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../services/authProvider';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (firebaseUser) => {
    setUser(firebaseUser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {!user ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
