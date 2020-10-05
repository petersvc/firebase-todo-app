import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

import styles from './style';
import TagModal from '../tagModal/TagModal';

function TodoModal({todosCollection, task, tagColor, toggleTodoModal}) {
  const [tagModal, setTagModal] = useState(false);
  function toggleTagModal() {
    setTagModal(!tagModal);
  }

  const [todo, setTodo] = useState({
    title: task.title,
    tag: task.tag,
    begin: task.begin,
    end: task.end,
    date: task.date,
    repeat: task.repeat,
    complete: task.complete,
  });

  const [rawDate, setRawDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const d = new Date();
  let fdate = rawDate.toString();
  let yearIndex = fdate.indexOf(String(d.getFullYear()));
  let date = fdate.substring(4, yearIndex + 4);
  let begin = fdate.substring(yearIndex + 5, yearIndex + 10);
  let [month, day, year] = date.split(' ');

  const months = {
    Feb: 'Fev',
    Apr: 'Abr',
    May: 'Mai',
    Aug: 'Ago',
    Sep: 'Set',
    Oct: 'Out',
    Dec: 'Dez',
  };

  month = months[month];
  date = `${month} ${day} ${year}`;

  const onChange = (event, selectedrawDate) => {
    const currentrawDate = selectedrawDate || rawDate;
    setShow(Platform.OS === 'ios');
    setRawDate(currentrawDate);

    fdate = currentrawDate.toString();
    yearIndex = fdate.indexOf(String(d.getFullYear()));
    date = fdate.substring(4, yearIndex + 4);
    begin = fdate.substring(yearIndex + 5, yearIndex + 10);
    [month, day, year] = date.split(' ');

    month = months[month];
    date = `${month} ${day} ${year}`;
    if (mode === 'date') {
      setTodo({...todo, date});
    } else {
      setTodo({...todo, begin});
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  async function updateTodo() {
    await todosCollection.doc(task.id).update(todo);
  }

  async function deleteTodo() {
    await todosCollection.doc(task.id).delete();
  }

  return (
    <View style={[styles.editArea]}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.complete}
          onPress={() => setTodo({...todo, complete: !todo.complete})}>
          <Icon
            name={todo.complete ? 'md-checkmark' : 'ellipse-outline'}
            size={styles.icon.size + 10}
            color={todo.complete ? tagColor : styles.icon.color}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.taskTitle}
          placeholder={task.title}
          placeholderTextColor={styles.colors.white}
          onChangeText={(title) => setTodo({...todo, title})}
        />
      </View>
      <View style={styles.dateHour}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={rawDate}
            mode={mode}
            is24Hour
            display="default"
            minimumDate={new Date()}
            onChange={onChange}
          />
        )}
        <TouchableOpacity onPress={showDatepicker} style={styles.taskItem}>
          <Icon
            name="ios-calendar-outline"
            size={styles.icon.size - 3}
            color={styles.icon.color}
          />
          <Text style={[styles.smallText2, {marginLeft: 6}]}>{todo.date}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showTimepicker} style={styles.taskItem}>
          <Icon
            name="time-outline"
            size={styles.icon.size - 2}
            color={styles.icon.color}
          />
          <Text style={[styles.smallText2, {marginLeft: 4}]}>{todo.begin}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskItem} onPress={toggleTagModal}>
          <Icon
            name="pricetags-outline"
            size={styles.icon.size - 2}
            color={styles.icon.color}
          />
          <Text style={[styles.smallText2, {marginLeft: 6}]}>{todo.tag}</Text>
          <Modal
            style={{margin: 0}}
            isVisible={tagModal}
            onBackdropPress={toggleTagModal}
            useNativeDriver
            hideModalContentWhileAnimating
            animationIn="fadeInUp"
            animationOut="fadeOutDown"
            animationInTiming={300}>
            <TagModal
              todo={todo}
              setTodo={setTodo}
              toggleTagModal={toggleTagModal}
            />
          </Modal>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.taskItem2, {marginRight: 16}]}
          onPress={deleteTodo}>
          <Icon
            name="ios-trash-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
          <Text style={[styles.title, {marginLeft: 6}]}>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskItem2}
          onPress={() => {
            updateTodo();
            toggleTodoModal();
          }}>
          <Icon
            name="ios-save-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
          <Text
            style={[styles.title, {marginLeft: 6, color: styles.colors.main}]}>
            save changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
export default TodoModal;
