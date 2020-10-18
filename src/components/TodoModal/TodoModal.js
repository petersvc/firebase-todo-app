import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

import styles from './style';
import {colors, diagram} from '../../styles/baseStyle';
import TagModal from '../TagModal/TagModal';

function TodoModal({todosCollection, task, tagColor, toggleTodoModal}) {
  const [tagModal, setTagModal] = useState(false);
  function toggleTagModal() {
    setTagModal(!tagModal);
  }

  const [todo, setTodo] = useState({
    title: task.title,
    description: task.description,
    tag: task.tag,
    begin: task.begin,
    date: task.date,
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

  const bottomMargin = 105;
  const leftMargin = 100;

  return (
    <View style={[styles.editArea]}>
      <View style={styles.top}>
        <View style={styles.titleComplete}>
          <TouchableOpacity
            style={styles.complete}
            onPress={() => setTodo({...todo, complete: !todo.complete})}>
            <Icon
              name={todo.complete ? 'check' : 'circle-outline'}
              size={diagram.iconSize + 3}
              color={todo.complete ? tagColor : colors.dim}
            />
          </TouchableOpacity>
          <TextInput
            style={[styles.taskTitle]}
            placeholder={task.title}
            placeholderTextColor={colors.white}
            onChangeText={(title) => setTodo({...todo, title})}
          />
        </View>

        <TextInput
          style={[styles.taskDescription]}
          placeholder={
            task.description !== '' ? task.description : 'Sem descrição'
          }
          placeholderTextColor={colors.dim}
          onChangeText={(title) => setTodo({...todo, description: title})}
        />
      </View>
      <View style={styles.mid}>
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
          <Icon name="calendar" size={diagram.iconSize} color={colors.dim} />
          <Text style={[styles.numbers, {marginLeft: 23}]}>{todo.date}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showTimepicker} style={styles.taskItem}>
          <Icon
            name="clock-time-three"
            size={diagram.iconSize}
            color={colors.dim}
          />
          <Text style={[styles.numbers, {marginLeft: 23}]}>{todo.begin}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskItem} onPress={toggleTagModal}>
          <Icon name="tag-text" size={diagram.iconSize} color={colors.dim} />
          <Text
            style={[
              styles.numbers,
              {marginLeft: 23, textTransform: 'capitalize'},
            ]}>
            {todo.tag}
          </Text>
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
              bottomMargin={bottomMargin}
              leftMargin={leftMargin}
            />
          </Modal>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.taskItem2}
          onPress={() => {
            updateTodo();
            toggleTodoModal();
          }}>
          <Icon
            // style={{marginRight: 16}}
            name="check"
            size={diagram.iconSize}
            color={colors.main}
          />
          <Text style={[styles.title, {fontWeight: 'bold', display: 'none'}]}>
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.taskItem2]} onPress={deleteTodo}>
          <Icon
            // style={{marginRight: 16}}
            name="trash-can-outline"
            size={diagram.iconSize}
            color={colors.main}
          />
          <Text style={[styles.title, {display: 'none'}]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
// <Text style={[styles.title, {fontWeight: 'bold'}]}>Salvar</Text>
// <Text style={[styles.title]}>Deletar</Text>
export default TodoModal;
