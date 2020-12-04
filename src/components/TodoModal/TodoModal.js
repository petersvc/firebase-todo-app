import React, { useState, useContext } from 'react';
import {
   TextInput,
   View,
   Text,
   TouchableOpacity,
   Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

// eslint-disable-next-line import/no-unresolved
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';
import TagModal from '../tagModal/TagModal';
import { DatabaseContext } from '../../services/databaseProvider';

function TodoModal({ todo, tagColor, toggleTodoModal }) {
   const [tagModal, setTagModal] = useState(false);
   function toggleTagModal() {
      setTagModal(!tagModal);
   }

   const { updateTodo, deleteTodo } = useContext(DatabaseContext);

   const [newTodo, setNewTodo] = useState({
      title: todo.title,
      description: todo.description,
      tag: todo.tag,
      begin: todo.begin,
      date: todo.date,
      complete: todo.complete,
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
      Nov: 'Nov',
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
         setNewTodo({ ...newTodo, date });
      } else {
         setNewTodo({ ...newTodo, begin });
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

   const bottomMargin = 105;
   const leftMargin = 100;

   return (
      <View style={[styles.editArea]}>
         <View style={styles.top}>
            <View style={styles.titleComplete}>
               <TouchableOpacity
                  style={styles.complete}
                  onPress={() =>
                     setNewTodo({ ...newTodo, complete: !newTodo.complete })
                  }>
                  <Icon
                     name={
                        newTodo.complete
                           ? 'check-circle-outline'
                           : 'circle-outline'
                     }
                     size={diagram.iconSize + 5}
                     color={colors.dim} // newTodo.complete ? tagColor : colors.dim
                  />
               </TouchableOpacity>
               <TextInput
                  style={[styles.taskTitle]}
                  placeholder={newTodo.title}
                  placeholderTextColor={colors.white}
                  onChangeText={(title) => setNewTodo({ ...newTodo, title })}
               />
            </View>

            <TextInput
               style={[styles.taskDescription]}
               placeholder={
                  newTodo.description !== ''
                     ? newTodo.description
                     : 'Sem descrição'
               }
               placeholderTextColor={colors.dim}
               onChangeText={(title) =>
                  setNewTodo({ ...newTodo, description: title })
               }
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
               <Icon
                  name="calendar-outline"
                  size={diagram.iconSize}
                  color={colors.dim}
               />
               <Text
                  style={[
                     styles.smallText2,
                     { marginLeft: 17, fontSize: 14, color: colors.dim },
                  ]}>
                  {newTodo.date}
               </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={showTimepicker} style={styles.taskItem}>
               <Icon name="alarm" size={diagram.iconSize} color={colors.dim} />
               <Text
                  style={[
                     styles.smallText2,
                     { marginLeft: 17, fontSize: 14, color: colors.dim },
                  ]}>
                  {newTodo.begin}
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.taskItem} onPress={toggleTagModal}>
               <IconFeather
                  name="hash"
                  size={diagram.iconSize}
                  color={colors.dim}
               />
               <Text
                  style={[
                     styles.smallText2,
                     {
                        marginLeft: 17,
                        fontSize: 14,
                        textTransform: 'capitalize',
                        color: colors.dim,
                     },
                  ]}>
                  {newTodo.tag}
               </Text>
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
                     todo={newTodo}
                     setTodo={setNewTodo}
                     toggleTagModal={toggleTagModal}
                     bottomMargin={bottomMargin}
                     leftMargin={leftMargin}
                  />
               </Modal>
            </TouchableOpacity>
         </View>
         <View style={styles.bottom}>
            <TouchableOpacity
               style={[styles.taskItem2]}
               onPress={() => deleteTodo(todo.id)}>
               <Icon
                  // style={{marginRight: 16}}
                  name="trash-can-outline"
                  size={diagram.iconSize}
                  color={colors.dim}
               />
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.taskItem2}
               onPress={() => {
                  updateTodo(todo.id, newTodo);
                  toggleTodoModal();
               }}>
               <Icon
                  style={{ marginTop: 0 }}
                  name="check"
                  size={diagram.iconSize}
                  color={colors.white}
               />
            </TouchableOpacity>
         </View>
      </View>
   );
}
// <Text style={[styles.date, styles.smallText]}>{task.date}</Text>
// <Text style={[styles.title, {fontWeight: 'bold'}]}>Salvar</Text>
// <Text style={[styles.title]}>Deletar</Text>
export default TodoModal;
