import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

function TagModal({todo, setTodo, toggleTagModal, bottomMargin}) {
  let radioBtn;
  const tagList = ['livre', 'saúde', 'aprender', 'trabalho'];

  const tagView = tagList.map((tag) => {
    if (todo.tag === tag) radioBtn = 'circle-slice-8';
    else radioBtn = 'circle-outline';
    return (
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, tag});
          toggleTagModal();
        }}>
        <Icon
          name={radioBtn}
          size={styles.icon.size + 8}
          color={styles.icon.color}
        />
        <Text
          style={[styles.title, {marginLeft: 30, textTransform: 'capitalize'}]}>
          {tag}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={[styles.tagModal, {marginBottom: bottomMargin}]}>
      {tagView}
    </View>
  );
}

export default TagModal;
