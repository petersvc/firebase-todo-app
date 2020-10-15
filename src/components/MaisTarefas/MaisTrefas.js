import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './style';

function MaisTarefas({todosCollection, lists}) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  async function completarTarefa(todoId) {
    await todosCollection.doc(todoId).update({complete: true});
  }

  async function deletarTarefa(todoId) {
    await todosCollection.doc(todoId).delete();
  }

  const maisItens = [
    'Excluir concluídas',
    'Excluir atrasadas',
    'Concluir todas',
  ];
  const keyExtractor = useCallback((item) => item);

  const renderMaisItens = useCallback(({item}) => {
    let maisItemFunction;
    if (item === 'Concluir todas') {
      maisItemFunction = () => {
        lists.map((list) =>
          list.todos.map((todo) => {
            if (!todo.complete) {
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
              deletarTarefa(todo.id);
            }
            return 0;
          }),
        );
      };
    }

    return (
      <TouchableOpacity
        style={styles.maisItem}
        onPress={() => maisItemFunction()}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.maisArea}>
      <TouchableOpacity style={styles.maisButton} onPress={toggleModal}>
        <Icon
          style={[{marginRight: -8}]}
          name="dots-vertical"
          size={styles.icon.size + 5}
          color={styles.colors.dim}
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
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
export default MaisTarefas;
