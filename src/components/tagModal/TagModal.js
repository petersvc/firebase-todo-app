import React, { useCallback } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import { colors } from '../../styles/baseStyle';

function TagModal({ todo, setTodo, toggleTagModal, bottomMargin }) {
   let radioBtn;
   const tagList = ['livre', 'saúde', 'aprender', 'trabalho'];
   const keyExtractor = useCallback((item) => item);
   const tagRender = useCallback(({ item }) => {
      let iconColor = colors.dim;
      if (todo.tag === item) {
         radioBtn = 'radio-button-on';
         iconColor = colors.main;
      } else radioBtn = 'radio-button-off';
      return (
         <TouchableOpacity
            style={styles.tagItem}
            onPress={() => {
               setTodo({ ...todo, tag: item });
               toggleTagModal();
            }}>
            <Icon
               name={radioBtn}
               size={styles.icon.size + 8}
               color={iconColor}
            />
            <Text
               style={[
                  styles.title,
                  { marginLeft: 30, textTransform: 'capitalize' },
               ]}>
               {item}
            </Text>
         </TouchableOpacity>
      );
   }, []);

   return (
      <View style={[styles.tagModal, { marginBottom: bottomMargin }]}>
         <FlatList
            data={tagList}
            keyExtractor={keyExtractor}
            renderItem={tagRender}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
         />
      </View>
   );
}

export default TagModal;
