import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DatabaseContext } from '../../services/databaseProvider';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Todo = ({ todo, listId }) => {
  const { toggleCompleteTodo } = useContext(DatabaseContext);
  let iconName = 'circle-outline';
  let iconColor = colors.dim;
  let iconSize = diagram.iconSize + 8;
  let iconMarginAdjustments = null;
  let todoOpacity = null;
  let tagColor = colors.green;
  let timeComplement = '';
  const timeColor = { color: colors.white };

  if (todo.tag === 'saúde') tagColor = colors.red;
  else if (todo.tag === 'aprender') tagColor = colors.blue;
  else if (todo.tag === 'trabalho') tagColor = colors.purple;

  if (todo.complete) {
    iconName = 'check';
    iconColor = colors.dim;
    iconSize = diagram.iconSize - 5;
    iconMarginAdjustments = { marginLeft: 6, marginRight: 6, marginTop: 1 };
    todoOpacity = { textDecorationLine: 'line-through', color: colors.dim };
  }

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  if (listId === 'concluídas') {
    timeComplement = '';
  } else if (listId !== 'hoje' || listId === 'amanhã') {
    timeComplement = `${todo.date.slice(0, 6)}, `;
  } else {
    timeComplement = `${capitalizeFirstLetter(listId)}, `;
  }

  // listId === 'hoje' ? (timeColor = { color: colors.green }) : null;
  // listId === 'atrasadas' ? (timeColor = { color: colors.red }) : null;

  return (
    <View style={[styles.horizontalContainer, styles.todo]}>
      <TouchableOpacity
        style={{ marginLeft: -2, marginRight: diagram.padding }}
        onPress={() => toggleCompleteTodo(todo.id, todo.complete)}>
        <Icon
          name={iconName}
          color={iconColor}
          size={iconSize}
          style={iconMarginAdjustments}
        />
      </TouchableOpacity>

      <Text style={[styles.title, todoOpacity]}>{todo.title}</Text>

      <View style={[styles.horizontalContainer, styles.timeContent]}>
        <Text style={[styles.numbersSm, styles.begin, todoOpacity, timeColor]}>
          {timeComplement}
          {todo.begin}
        </Text>
      </View>
    </View>
  );
};

export default Todo;

/*


      <Icon
        name="circle"
        color={tagColor}
        size={diagram.iconSize - 20}
        style={{ marginLeft: 10 }}
      />

*/
