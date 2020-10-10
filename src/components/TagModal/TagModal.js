import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

function TagModal({todo, setTodo, toggleTagModal, bottomMargin}) {
  let radioBtn;
  const tagList = ['free', 'health', 'learn', 'work'];

  const tagView = tagList.map((tag) => {
    if (todo.tag === tag) radioBtn = 'radio-button-on';
    else radioBtn = 'radio-button-off';
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
