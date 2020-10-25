import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AddTodo from '../addTodo/AddTodo';
import More from '../more/More';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const footer = ({ navigation, addTodo }) => {
  return (
    <View style={[styles.verticalContainer, styles.footer]}>
      <View style={[styles.horizontalContainer, styles.bottom]}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={diagram.iconSize} color={colors.dim} />
        </TouchableOpacity>
        <AddTodo addTodo={addTodo} />
        <More />
      </View>
    </View>
  );
};

export default footer;
