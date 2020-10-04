import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import styles from './style';
import TodoModal from '../TodoModal/TodoModal';

function TodoTask({task, todosCollection}) {
  const [todoModal, setTodoModal] = useState(false);
  function toggleTodoModal() {
    setTodoModal(!todoModal);
  }

  async function toggleComplete() {
    await todosCollection.doc(task.id).update({complete: !task.complete});
  }

  let tagColor = styles.colors.main;

  if (task.tag === 'work') tagColor = styles.colors.orange;
  else if (task.tag === 'learn') tagColor = styles.colors.blue;
  else if (task.tag === 'health') tagColor = styles.colors.red;
  else if (task.tag === 'free') tagColor = styles.colors.green2;

  return (
    <View style={styles.task}>
      <TouchableOpacity style={styles.complete} onPress={toggleComplete}>
        <Icon
          name={task.complete ? 'md-checkmark' : 'ellipse-outline'}
          size={styles.icon.size + 10}
          color={task.complete ? tagColor : styles.icon.color}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={toggleTodoModal}>
          <Text style={task.complete ? styles.done : styles.title}>
            {task.title}
          </Text>
          <Icon
            style={{marginLeft: 5}}
            name="ios-ellipse"
            size={styles.icon.size - 12}
            color={tagColor}
          />
        </TouchableOpacity>

        <View style={styles.times}>
          <Icon
            style={{marginRight: 3}}
            name="ios-time-outline"
            size={styles.icon.size - 6}
            color={styles.icon.color}
          />

          <Text
            style={
              task.complete
                ? [styles.smallText, styles.done]
                : [styles.smallText, styles.begin]
            }>
            {task.begin}
          </Text>
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
