import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import { DatabaseContext } from '../../services/databaseProvider';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Todo = ({ todo, listId }) => {
  const { toggleCompleteTodo } = useContext(DatabaseContext);
  let iconName = 'ellipse-outline';
  let iconColor = colors.dim;
  let iconSize = diagram.iconSize + 5;
  const iconMarginAdjustments = null;
  let todoOpacity = null;
  let tagColor = colors.green;
  let time = '';
  let timeColor = { color: colors.white };

  if (todo.tag === 'saúde') tagColor = colors.red;
  else if (todo.tag === 'aprender') tagColor = colors.blue;
  else if (todo.tag === 'trabalho') tagColor = colors.purple;

  if (todo.complete) {
    iconName = 'checkmark-outline';
    iconColor = colors.dim;
    iconSize = diagram.iconSize + 5;
    // iconMarginAdjustments = { marginLeft: 6, marginRight: 6, marginTop: 1 };
    todoOpacity = { textDecorationLine: 'line-through', color: colors.dim };
  }

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  if (listId === 'concluídas') {
    time = todo.begin;
  } else if (listId === 'atrasadas') {
    time = 'Atrasada';
    timeColor = { color: colors.red2 };
  } else if (listId === 'hoje' || listId === 'amanhã') {
    time = `${capitalizeFirstLetter(listId)}, ${todo.begin}`;
    if (listId === 'hoje') timeColor = { color: colors.green };
  } else {
    time = `${todo.date.slice(0, 6)}`;
  }

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
      <View style={[styles.verticalContainer, { marginTop: 2 }]}>
        <Text style={[styles.title, todoOpacity]}>{todo.title}</Text>

        <View style={styles.horizontalContainer}>
          <View style={[styles.horizontalContainer, styles.timeContent]}>
            <Text
              style={[styles.numbersSm, styles.begin, timeColor, todoOpacity]}>
              {time}
            </Text>
          </View>
        </View>
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
