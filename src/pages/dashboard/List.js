import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Todo from './Todo';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const List = ({ list }) => {
  const keyExtractor = useCallback((item) => item.id);
  const renderTodo = useCallback(({ item }) => (
    <Todo todo={item} listId={list.id} />
  ));

  const listComplete = list.todos.filter((todo) => todo.complete).length;
  const listTotal = list.todos.length;

  let iconName = 'calendar-today';

  if (list.id === 'concluídas') {
    iconName = 'check-circle-outline';
  } else if (list.id === 'atrasadas') {
    iconName = 'clock-alert-outline';
  } else if (list.id === 'amanhã') {
    iconName = 'calendar-arrow-right';
  } else if (list.id === 'agendadas') {
    iconName = 'timer-outline';
  }

  return (
    <View style={[styles.verticalContainer, styles.list]}>
      <View style={[styles.listHeader, styles.horizontalContainer]}>
        <Icon
          style={{ display: 'none' }}
          name={iconName}
          color={colors.main}
          size={diagram.iconSize}
        />
        <Text style={[styles.titleSpoted, styles.listName]}>{list.id}</Text>
        <View style={[styles.tasksNumbers]}>
          <Text style={[styles.numbersSm, styles.remaining]}>
            {list.id === 'concluídas' ? listTotal : listTotal - listComplete}
          </Text>
        </View>
      </View>
      <FlatList
        data={list.todos}
        keyExtractor={keyExtractor}
        renderItem={renderTodo}
      />
      <View style={styles.separator} />
    </View>
  );
};

export default List;

/* 

<View style={[styles.tasksNumbers]}>
  <Text style={[styles.numbersSm, styles.remaining]}>
    {list.id === 'concluída' ? listTotal : listTotal - listComplete}
  </Text>
</View>

*/
