import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';
import TagModal from '../tagModal/TagModal';

function AddTodo({ addTodo }) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  const [tagModal, setTagModal] = useState(false);
  function toggleTagModal() {
    setTagModal(!tagModal);
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
    tag: 'livre',
    description: '',
    begin,
    date,
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
      setTodo({ ...todo, date });
    } else {
      setTodo({ ...todo, begin });
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

  const bottomMargin = 50;
  const leftMargin = 280;

  return (
    <View style={styles.addArea}>
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Icon name="plus" size={diagram.iconSize + 3} color={colors.white} />
      </TouchableOpacity>
      <Modal
        style={{ margin: 0 }}
        isVisible={modal}
        onBackdropPress={toggleModal}
        useNativeDriver
        hideModalContentWhileAnimating
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        animationInTiming={300}>
        <View style={styles.addModal}>
          <View style={styles.addHead}>
            <View style={styles.inputTask}>
              <Icon
                name="circle-outline"
                size={diagram.iconSize}
                color={colors.dim}
              />
              <TextInput
                style={[styles.taskTitle]}
                placeholder="O que você deseja fazer?"
                placeholderTextColor={colors.white}
                maxLength={32}
                // autoFocus
                onChangeText={(title) => setTodo({ ...todo, title })}
              />
            </View>
            <TextInput
              style={[styles.taskDescription]}
              placeholder={
                todo.description !== '' ? todo.description : 'Sem descrição'
              }
              placeholderTextColor={colors.dim}
              onChangeText={(title) => setTodo({ ...todo, description: title })}
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
                name="calendar"
                size={styles.icon.size}
                color={colors.dim}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker} style={styles.taskItem}>
              <Icon
                name="clock-time-three"
                size={diagram.iconSize}
                color={colors.dim}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTagModal} style={styles.taskItem}>
              <Icon
                name="tag-text"
                size={diagram.iconSize}
                color={colors.dim}
              />
              <Modal
                style={{ margin: 0 }}
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

            <TouchableOpacity
              style={styles.taskSend}
              onPress={() => {
                addTodo(todo);
                toggleModal();
              }}>
              <Icon
                name="send"
                size={diagram.iconSize + 3}
                color={colors.main}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddTodo;

/*
<TouchableOpacity style={styles.taskItem}>
  <Icon
    name="text-box"
    size={diagram.iconSize}
    color={colors.dim}
  />
</TouchableOpacity>
*/
