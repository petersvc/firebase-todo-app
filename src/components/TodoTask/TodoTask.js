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

  const tagColor = styles.colors.dim;
  let listColor = styles.colors.dim;

  // if (task.tag === 'work') tagColor = styles.colors.orange;
  // else if (task.tag === 'learn') tagColor = styles.colors.blue;
  // else if (task.tag === 'health') tagColor = styles.colors.red;
  // else if (task.tag === 'free') tagColor = styles.colors.green;
  if (listId === 'hoje') listColor = styles.colors.green;
  else if (listId === 'atrasada') listColor = styles.colors.red;
  return (
    <View style={styles.task}>
      <TouchableOpacity style={styles.content} onPress={toggleTodoModal}>
        <Text style={[styles.smallText2, {marginBottom: 8}]}>{task.tag}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={task.complete ? styles.done : styles.title}>
            {task.title}
          </Text>
        </View>
        {listId !== 'completada' && listId !== 'amanhã' ? (
          <View style={styles.taskBottom}>
            <View style={styles.contentItem}>
              <Icon
                style={[{marginRight: 3}]}
                name="alarm"
                size={styles.icon.size - 5}
                color={listColor}
              />

              <Text
                style={
                  task.complete
                    ? [styles.smallText2, styles.done]
                    : [styles.smallText2, styles.begin, {color: listColor}]
                }>
                {listId === 'agendada' ? `${task.date.slice(0, 6)}, ` : null}
                {task.begin}
              </Text>
            </View>
            {listId !== 'agendada' ? (
              <TouchableOpacity
                style={styles.complete}
                onPress={toggleComplete}>
                <Icon
                  name={task.complete ? 'check' : 'circle-outline'}
                  size={styles.icon.size + 3}
                  color={task.complete ? tagColor : styles.colors.dim}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

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
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
// <Text style={[styles.smallText, styles.end]}>{task.end}</Text>
export default TodoTask;

/*

<Icon
          style={{marginLeft: 17, marginTop: -13}}
          name="ios-ellipse"
          size={task.complete ? styles.icon.size - 12 : styles.icon.size - 9}
          color={tagColor}
        />
, {color: propColor}
, {color: propColor}
{task.end !== '' ? `- ${task.end}` : null}

          <Icon
            style={{marginRight: 5}}
            name="ios-time-outline"
            size={styles.icon.size - 6}
            color={styles.icon.color}
          />
          {task.repeat ? (
            <Icon
              name="ios-sync-outline"
              size={styles.icon.size - 4}
              color={styles.icon.color}
            />
          ) : null}

        <Icon
          name="md-chevron-forward"
          size={styles.icon.size - 3}
          color={styles.icon.color}
        />
*/
