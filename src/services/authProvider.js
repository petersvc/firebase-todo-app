import React, { createContext, useState } from 'react';

import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [todos, setTodos] = useState([]);

   return (
      <AuthContext.Provider
         value={{
            user,
            setUser,
            todos,
            setTodos,
            googleLogin: async () => {
               const { idToken } = await GoogleSignin.signIn();
               const googleCredential = auth.GoogleAuthProvider.credential(
                  idToken,
               );
               await auth().signInWithCredential(googleCredential);
            },
            googleLogout: async () => {
               try {
                  GoogleSignin.configure({});
                  await GoogleSignin.revokeAccess();
                  await GoogleSignin.signOut();
               } catch (error) {
                  console.error(error);
               }
               auth().signOut();
               setUser(null);
            },
         }}>
         {children}
      </AuthContext.Provider>
   );
};
