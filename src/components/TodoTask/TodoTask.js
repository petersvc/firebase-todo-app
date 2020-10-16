import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import styles from './style';
import {colors} from '../../styles/baseStyle';
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
          size={styles.icon.size + 4}
          color={task.complete ? tagColor : colors.main}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.content} onPress={toggleTodoModal}>
        <Text style={task.complete ? styles.done : styles.title}>
          {task.title}
        </Text>
        {task.description !== '' ? (
          <Text style={styles.taskDescription}>{task.description}</Text>
        ) : null}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {listId !== 'concluída' ? (
            <View style={styles.contentItem}>
              <Icon
                style={{marginRight: 3, marginTop: -0.5}}
                name={listId !== 'agendada' ? 'alarm' : 'calendar'}
                size={styles.icon.size - 6}
                color={colors.dim}
              />
              <Text
                style={
                  task.complete
                    ? [styles.numbersSm, styles.done]
                    : [styles.numbersSm, styles.begin, {color: listColor}]
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
