import React, { useContext } from 'react';
import { View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../services/authProvider';
import { fonts } from '../../styles/baseStyle';

import styles from './styles';

const loginImg = require('../../assets/acc7.png');

const SignIn = () => {
  const { googleLogin, googleLogout, user } = useContext(AuthContext);

  return (
    <View style={styles.login}>
      <StatusBar backgroundColor="rgba(27, 31, 36, 1)" />
      <View style={styles.top}>
        <Text style={[styles.titleSpoted, styles.logo]}>Todots</Text>
      </View>
      <View style={styles.mid}>
        <Image style={styles.loginImg} source={loginImg} />
        <Text onPress={googleLogout} style={styles.welcome}>
          Bem vindo ao Todots
        </Text>
        <Text style={[styles.title, styles.textItem]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing.{' '}
          {user ? user.displayName : 'nadinha'}
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.loginBtn} onPress={googleLogin}>
          <Icon
            name="logo-google"
            size={styles.icon.size}
            color={styles.colors.main}
          />
          <Text
            style={[
              styles.titleSpoted,
              {
                // color: styles.colors.main,
                marginLeft: 10,
                textTransform: 'none',
                // fontFamily: fonts.family.bold,
              },
            ]}>
            Login com Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
