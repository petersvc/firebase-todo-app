import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './style';
import TodoModal from '../TodoModal/TodoModal';

function TodoTask({task, todosCollection, listId}) {
  const [todoModal, setTodoModal] = useState(false);
  function toggleTodoModal() {
    setTodoModal(!todoModal);
  }

  async function toggleComplete() {
    await todosCollection.doc(task.id).update({complete: !task.complete});
  }

  const tagColor = styles.colors.green;
  const listColor = styles.colors.dim;

  return (
    <View style={styles.task}>
      <TouchableOpacity style={styles.complete} onPress={toggleComplete}>
        <Icon
          name={task.complete ? 'check' : 'circle-outline'}
          size={styles.icon.size + 5}
          color={task.complete ? tagColor : styles.colors.dim}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={toggleTodoModal}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={task.complete ? styles.done : styles.title}>
            {task.title}
          </Text>
          {listId !== 'concluída' ? (
            <View style={styles.contentItem}>
              <Text
                style={
                  task.complete
                    ? [styles.timeInfo, styles.done]
                    : [styles.timeInfo, styles.begin, {color: listColor}]
                }>
                {listId === 'agendada' ? `${task.date.slice(0, 6)}, ` : null}
                {task.begin}
              </Text>
            </View>
          ) : null}
        </View>

        <Modal
          style={{margin: 0}}
          isVisible={todoModal}
          onBackdropPress={toggleTodoModal}
          useNativeDriver
          hideModalContentWhileAnimating
          animationIn="fadeInUp"
          animationOut="fadeOutDown"
          animationInTiming={300}>
          <TodoModal
            task={task}
            tagColor={tagColor}
            todosCollection={todosCollection}
            toggleTodoModal={toggleTodoModal}
          />
        </Modal>
      </TouchableOpacity>
      <View style={styles.rightSide} />
    </View>
  );
}

export default TodoTask;

/*

*/
