import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

function AddTodo({todosCollection}) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

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

  const [todo, setTodo] = useState({
    title: '',
    tag: 'free',
    begin,
    end: '',
    date,
    repeat: false,
    complete: false,
  });

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

  async function addTodo() {
    await todosCollection.add(todo);
    // setTodo('');
  }

  return (
    <View style={styles.addArea}>
      <TouchableOpacity style={styles.addButton2} onPress={toggleModal}>
        <Icon
          name="add"
          size={styles.icon.size + 5}
          color={styles.icon.color}
        />
      </TouchableOpacity>
      <Modal
        style={{margin: 0}}
        isVisible={modal}
        onBackdropPress={toggleModal}
        useNativeDriver
        hideModalContentWhileAnimating
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        animationInTiming={300}>
        <View style={styles.addModal}>
          <View style={styles.inputTask}>
            <Icon
              name="ellipse-outline"
              size={styles.icon.size + 8}
              color={styles.icon.color}
            />
            <TextInput
              style={{marginLeft: 10, color: styles.icon.color}}
              placeholder="What would you like to do?"
              placeholderTextColor={styles.title.color}
              autoFocus
              onChangeText={(title) => setTodo({...todo, title})}
            />
          </View>

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
          <View style={styles.newTaskDetails}>
            <TouchableOpacity onPress={showDatepicker} style={styles.taskItem}>
              <Icon
                name="ios-calendar-outline"
                size={styles.icon.size - 3}
                color={styles.icon.color}
              />
              <Text style={[styles.smallText2, {marginLeft: 6}]}>{date}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker} style={styles.taskItem}>
              <Icon
                name="time-outline"
                size={styles.icon.size - 2}
                color={styles.icon.color}
              />
              <Text style={[styles.smallText2, {marginLeft: 4}]}>{begin}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.taskItem}>
              <Icon
                name="pricetags-outline"
                size={styles.icon.size - 2}
                color={styles.icon.color}
              />
              <Text style={[styles.smallText2, {marginLeft: 6}]}>Learn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.taskSend} onPress={addTodo}>
              <Icon
                name="send"
                size={styles.icon.size + 5}
                color={styles.icon.colorMain}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
export default AddTodo;
