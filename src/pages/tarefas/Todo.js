import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
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

   let iconName = 'circle';
   // const timeIcon = 'time-outline';
   let iconColor = colors.dim2;
   let iconSize = diagram.iconSize + 2;
   const iconMarginAdjustments = null;
   let todoOpacity = null;
   let tagColor = colors.green;
   let time = '';
   let timeColor = { color: colors.dim };

   if (todo.tag === 'saúde') tagColor = colors.red;
   else if (todo.tag === 'aprender') tagColor = colors.blue;
   else if (todo.tag === 'trabalho') tagColor = colors.purple;

   if (todo.complete) {
      iconName = 'check-circle';
      iconColor = colors.dim;
      tagColor = colors.dim;
      iconSize = diagram.iconSize + 2;
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
      if (listId === 'hoje') timeColor = { color: colors.dim };
      // timeIcon = 'time-outline';
      time = todo.begin;
   }

   return (
      <View style={[styles.horizontalContainer, styles.todo]}>
         <View style={[styles.verticalContainer, styles.left]}>
            <TouchableOpacity
               onPress={() => toggleCompleteTodo(todo.id, todo.complete)}>
               <IconFeather
                  name={iconName}
                  color={iconColor}
                  size={iconSize}
                  style={{ marginLeft: -2 }}
                  // style={iconMarginAdjustments}
               />
            </TouchableOpacity>
            <View
               style={{
                  marginLeft: -2,
                  width: 1,
                  paddingBottom: 30,
                  backgroundColor: colors.dim2,
                  alignSelf: 'center',
                  // display: 'none',
               }}
            />
         </View>
         <TouchableOpacity style={[styles.horizontalContainer, styles.right]}>
            <TouchableOpacity
               style={[styles.horizontalContainer]}
               onPress={toggleTodoModal}>
               <Text style={[styles.title, todoOpacity, { marginTop: -1 }]}>
                  {todo.title}
               </Text>
               <View style={[styles.horizontalContainer, styles.details]}>
                  <View style={[styles.horizontalContainer, styles.time]}>
                     <Icon
                        name={
                           listId === 'agendadas' ? 'calendar' : 'clock-outline'
                        }
                        color={colors.dim}
                        size={diagram.iconSize - 6}
                        style={{ marginRight: 3, display: 'none' }}
                     />
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
                     style={[
                        styles.horizontalContainer,
                        { marginLeft: 'auto', display: 'none' },
                     ]}>
                     <IconFeather
                        name="hash"
                        size={diagram.iconSize - 8}
                        color={colors.dim}
                     />
                     <Text style={[styles.smallText2, styles.tag, todoOpacity]}>
                        {todo.tag}
                     </Text>
                  </View>
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


<TouchableOpacity
               style={[styles.verticalContainer]}
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
                        { marginLeft: 0 },
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

*/
