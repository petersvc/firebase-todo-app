import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

function TagModal({todo, setTodo, toggleTagModal}) {
  return (
    <View style={styles.tagModal}>
      <Text style={[styles.sectionTitle]}>Tags</Text>
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, tag: 'free'});
          toggleTagModal();
        }}>
        <Icon
          name="ellipse-outline"
          size={styles.icon.size + 5}
          color={styles.icon.color}
        />
        <Text style={[styles.title, {marginLeft: 18}]}>Free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, tag: 'health'});
          toggleTagModal();
        }}>
        <Icon
          name="ellipse-outline"
          size={styles.icon.size + 5}
          color={styles.icon.color}
        />
        <Text style={[styles.title, {marginLeft: 18}]}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, tag: 'learn'});
          toggleTagModal();
        }}>
        <Icon
          name="ellipse-outline"
          size={styles.icon.size + 5}
          color={styles.icon.color}
        />
        <Text style={[styles.title, {marginLeft: 18}]}>Learn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, tag: 'work'});
          toggleTagModal();
        }}>
        <Icon
          name="ellipse-outline"
          size={styles.icon.size + 5}
          color={styles.icon.color}
        />
        <Text style={[styles.title, {marginLeft: 18}]}>Work</Text>
      </TouchableOpacity>
    </View>
  );
}
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
export default TagModal;
