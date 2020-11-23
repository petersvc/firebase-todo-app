import React, { useState, useCallback, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import { DatabaseContext } from '../../services/databaseProvider';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

function More() {
   const { smartLists, completeTodo, deleteTodo } = useContext(DatabaseContext);
   const [modal, setModal] = useState(false);
   function toggleModal() {
      setModal(!modal);
   }

   const maisItens = [
      'Excluir concluídas',
      'Excluir pendentes',
      'Concluir todas',
   ];
   const keyExtractor = useCallback((item) => item);

   const renderMaisItens = ({ item }) => {
      let maisItemFunction;

      if (item === 'Concluir todas') {
         maisItemFunction = () => {
            smartLists.map((list) =>
               list.todos.map((todo) => {
                  if (todo.complete === false) {
                     completeTodo(todo.id);
                  }
                  return 0;
               }),
            );
         };
      } else if (item === 'Excluir concluídas') {
         maisItemFunction = () => {
            smartLists.map((list) =>
               list.todos.map((todo) => {
                  if (todo.complete) {
                     deleteTodo(todo.id);
                  }
                  return 0;
               }),
            );
         };
      } else if (item === 'Excluir pendentes') {
         const listFilter = smartLists.filter(
            (list) => list.id === 'pendentes',
         );
         const listId = listFilter[0].id;
         maisItemFunction = () => {
            if (listId === 'pendentes' && listFilter[0].todos.length > 0) {
               listFilter[0].todos.map((todo) => deleteTodo(todo.id));
            }
         };
         // 30 caracteres
      }

      return (
         <TouchableOpacity style={styles.maisItem} onPress={maisItemFunction}>
            <Text style={styles.title}>{item}</Text>
         </TouchableOpacity>
      );
   };

   return (
      <View style={styles.maisArea}>
         <TouchableOpacity
            style={[styles.footerItem, styles.maisButton]}
            onPress={() => {
               toggleModal();
               // navigation.toggleDrawer();
            }}>
            <Icon
               name="dots-horizontal-circle-outline"
               size={diagram.iconSize + 3}
               color={colors.dim}
            />
         </TouchableOpacity>
         <Modal
            style={{ margin: 0 }}
            isVisible={modal}
            onBackdropPress={toggleModal}
            useNativeDriver
            hideModalContentWhileAnimating
            animationIn="fadeInDown"
            animationOut="fadeOutUp"
            animationInTiming={300}>
            <View style={styles.maisModal}>
               <FlatList
                  data={maisItens}
                  keyExtractor={keyExtractor}
                  renderItem={renderMaisItens}
               />
            </View>
         </Modal>
      </View>
   );
}

export default More;
