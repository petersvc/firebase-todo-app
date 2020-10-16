import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './style';
import {colors, diagram} from '../../styles/baseStyle';

function MaisTarefas({todosCollection, lists}) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  async function completarTarefa(todoId) {
    await todosCollection.doc(todoId).update({complete: false});
  }

  async function deletarConcluida(todoId) {
    await todosCollection.doc(todoId).delete();
  }

  async function deletarAtrasada(todoId) {
    await todosCollection.doc(todoId).delete();
  }

  const maisItens = [
    'Excluir concluídas',
    'Excluir atrasadas',
    'Concluir todas',
  ];
  const keyExtractor = useCallback((item) => item);

  const renderMaisItens = ({item}) => {
    let maisItemFunction; // = () => toggleModal();

    if (item === 'Concluir todas') {
      maisItemFunction = () => {
        lists.map((list) =>
          list.todos.map((todo) => {
            if (todo.complete) {
              completarTarefa(todo.id);
            }
            return 0;
          }),
        );
      };
    } else if (item === 'Excluir concluídas') {
      maisItemFunction = () => {
        lists.map((list) =>
          list.todos.map((todo) => {
            if (todo.complete) {
              deletarConcluida(todo.id);
            }
            return 0;
          }),
        );
      };
    } else if (item === 'Excluir atrasadas') {
      const listFilter = lists.filter((list) => list.id === 'atrasada');
      const listId = listFilter[0].id;
      maisItemFunction = () => {
        if (listId === 'atrasada' && listFilter[0].todos.length > 0) {
          listFilter[0].todos.map((todo) => deletarAtrasada(todo.id));
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
      <TouchableOpacity style={styles.maisButton} onPress={toggleModal}>
        <Icon
          // style={[{marginRight: -8}]}
          name="dots-horizontal"
          size={diagram.iconSize}
          color={colors.dim}
        />
      </TouchableOpacity>
      <Modal
        style={{margin: 0}}
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

export default MaisTarefas;
