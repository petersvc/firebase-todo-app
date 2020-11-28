import React, { useState } from 'react';
import {
   TextInput,
   View,
   Text,
   TouchableOpacity,
   Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';
import TagModal from '../tagModal/TagModal';

const months = {
   Feb: 'Fev',
   Apr: 'Abr',
   May: 'Mai',
   Aug: 'Ago',
   Sep: 'Set',
   Oct: 'Out',
   Nov: 'Nov',
   Dec: 'Dez',
};

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
         <TouchableOpacity
            style={[styles.horizontalContainer, styles.addButton]}
            onPress={toggleModal}>
            <Icon name="add" size={diagram.iconSize + 6} color={colors.bg} />
            <Text style={[{ display: 'none' }, styles.title]}>Nova tarefa</Text>
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
                  <Icon
                     style={{ display: 'none' }}
                     name="radio-button-off"
                     size={diagram.iconSize + 2}
                     color={colors.dim}
                  />
                  <TextInput
                     style={[styles.title, styles.taskTitle]}
                     placeholder="Nova tarefa"
                     placeholderTextColor={colors.dim}
                     maxLength={32}
                     // autoFocus
                     onChangeText={(title) => setTodo({ ...todo, title })}
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
                  <TouchableOpacity
                     onPress={showDatepicker}
                     style={styles.taskItem}>
                     <Icon
                        name="today-outline"
                        size={diagram.iconSize}
                        color={colors.white}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={showTimepicker}
                     style={styles.taskItem}>
                     <Icon
                        name="time-outline"
                        size={diagram.iconSize}
                        color={colors.white}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={showTimepicker}
                     style={styles.taskItem}>
                     <Icon
                        name="document-text-outline"
                        size={diagram.iconSize}
                        color={colors.white}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={toggleTagModal}
                     style={styles.taskItem}>
                     <IconFeather
                        name="hash"
                        size={diagram.iconSize}
                        color={colors.white}
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
                        size={diagram.iconSize}
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

<TextInput
                     style={[styles.title, styles.taskDescription]}
                     placeholder={
                        todo.description !== ''
                           ? todo.description
                           : 'Sem descrição'
                     }
                     placeholderTextColor={colors.dim}
                     onChangeText={(title) =>
                        setTodo({ ...todo, description: title })
                     }
                  />

<TouchableOpacity style={styles.taskItem}>
  <Icon
    name="text-box"
    size={diagram.iconSize}
    color={colors.dim}
  />
</TouchableOpacity>

<Icon
  name="circle-outline"
  size={diagram.iconSize}
  color={colors.dim}
/>

*/
