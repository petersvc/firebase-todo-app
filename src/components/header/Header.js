import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import More from '../more/More';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Header = ({ navigation, googleLogout }) => {
  return (
    <View style={[styles.horizontalContainer, styles.header]}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="menu-outline"
          size={diagram.iconSize + 8}
          color={colors.white}
        />
      </TouchableOpacity>
      <Text
        onPress={googleLogout}
        style={[styles.sectionTitle, styles.headerTitle]}>
        Tarefas
      </Text>
      <View style={[styles.horizontalContainer, styles.right]}>
        <Icon name="basket" size={diagram.iconSize + 2} color={colors.dim} />
        <Icon
          style={{ marginLeft: 22, marginRight: 6 }}
          name="location"
          size={diagram.iconSize + 2}
          color={colors.dim}
        />
        <More />
      </View>
    </View>
  );
};

export default Header;
