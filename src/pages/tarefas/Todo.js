import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import { DatabaseContext } from '../../services/databaseProvider';
import TodoModal from '../../components/todoModal/TodoModal';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Todo = ({ todo, listId }) => {
   const { toggleCompleteTodo } = useContext(DatabaseContext);

   const [todoModal, setTodoModal] = useState(false);
   function toggleTodoModal() {
      setTodoModal(!todoModal);
   }

   let iconName = 'ellipse-outline';
   // const timeIcon = 'time-outline';
   let iconColor = colors.dim;
   let iconSize = diagram.iconSize + 8;
   const iconMarginAdjustments = null;
   let todoOpacity = null;
   let tagColor = colors.green;
   let time = '';
   let timeColor = { color: colors.dim };

   if (todo.tag === 'saúde') tagColor = colors.red;
   else if (todo.tag === 'aprender') tagColor = colors.blue;
   else if (todo.tag === 'trabalho') tagColor = colors.purple;

   if (todo.complete) {
      iconName = 'checkmark-circle';
      iconColor = colors.bgLight3;
      tagColor = colors.dim;
      iconSize = diagram.iconSize + 8;
      // iconMarginAdjustments = { marginLeft: 6, marginRight: 6, marginTop: 1 };
      todoOpacity = { textDecorationLine: 'line-through', color: colors.dim };
   }

   /* function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  } */

   if (listId === 'concluídas') {
      time = todo.begin;
      // timeIcon = 'time-outline';
   } else if (listId === 'pendentes' || listId === 'agendadas') {
      // timeIcon = 'alert';
      time = `${todo.date.slice(0, 6)}`; // 'Atrasada';
      if (listId === 'pendentes') timeColor = { color: colors.red2 }; // `${capitalizeFirstLetter(listId)}, ${todo.begin}`;
   } else {
      if (listId === 'hoje') timeColor = { color: colors.white };
      // timeIcon = 'time-outline';
      time = todo.begin;
   }

   return (
      <View style={[styles.verticalContainer, styles.todo]}>
         <View
            style={[styles.horizontalContainer, { flex: 0, display: 'none' }]}>
            <View style={[styles.horizontalContainer, styles.time]}>
               <Text
                  style={[
                     styles.numbersSm,
                     styles.begin,
                     timeColor,
                     todoOpacity,
                  ]}>
                  {time}
               </Text>
            </View>
            <View
               style={{
                  marginLeft: 4,
                  height: 1,
                  width: '88%',
                  backgroundColor: colors.bgLight2,
               }}
            />
         </View>
         <TouchableOpacity style={[styles.horizontalContainer, styles.right]}>
            <TouchableOpacity
               style={{ marginLeft: -6, marginRight: 12 }}
               onPress={() => toggleCompleteTodo(todo.id, todo.complete)}>
               <Icon
                  name={iconName}
                  color={iconColor}
                  size={iconSize}
                  style={iconMarginAdjustments}
               />
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.verticalContainer, { flex: 0 }]}
               onPress={toggleTodoModal}>
               <Text style={[styles.title, todoOpacity, { marginTop: 0 }]}>
                  {todo.title}
               </Text>
               <View style={[styles.horizontalContainer, styles.details]}>
                  <View style={[styles.horizontalContainer, styles.time]}>
                     <Text
                        style={[
                           styles.numbersSm,
                           styles.begin,
                           timeColor,
                           todoOpacity,
                        ]}>
                        {time}
                     </Text>
                  </View>
                  <Text
                     style={[
                        styles.smallText2,
                        styles.tag,
                        todoOpacity,
                        { marginLeft: 'auto' },
                     ]}>
                     #{todo.tag}
                  </Text>
               </View>
               <Modal
                  style={{ margin: 0 }}
                  isVisible={todoModal}
                  onBackdropPress={toggleTodoModal}
                  useNativeDriver
                  hideModalContentWhileAnimating
                  animationIn="fadeInUp"
                  animationOut="fadeOutDown"
                  animationInTiming={300}>
                  <TodoModal
                     todo={todo}
                     tagColor={tagColor}
                     toggleTodoModal={toggleTodoModal}
                  />
               </Modal>
            </TouchableOpacity>
         </TouchableOpacity>
      </View>
   );
};

export default Todo;

/*
<Icon
                     style={[
                        { marginTop: -1, marginRight: 3, display: 'none' },
                        // listId === 'pendentes' ? { marginLeft: -4 } : null,
                     ]}
                     name={timeIcon}
                     color={colors.dim}
                     size={iconSize - 19}
                  />
<Text
                  style={[
                     {
                        marginLeft: diagram.padding,
                        marginTop: 2,
                        display: 'none',
                     },
                     styles.numbersSm,
                     styles.begin,
                     timeColor,
                     todoOpacity,
                  ]}>
                  {todo.tag}
               </Text>

<Icon
            name="ellipse"
            color={tagColor}
            size={diagram.iconSize - 10}
            style={{ display: 'none' }}
         />
      <Icon
        name="circle"
        color={tagColor}
        size={diagram.iconSize - 20}
        style={{ marginLeft: 10 }}
      />

*/
