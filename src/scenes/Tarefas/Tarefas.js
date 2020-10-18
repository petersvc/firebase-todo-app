import React, {useCallback, useEffect} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TodoTask from '../../components/TodoTask/TodoTask';
import MaisTarefas from '../../components/MaisTarefas/MaisTrefas';
import AddTodo from './AddTodo';
import styles from './style';
import {colors, diagram} from '../../styles/baseStyle';

function Tarefas({lists, setTodos, todosIsEmpty, user, navigation, today}) {
  const headerTitle = 'Tarefas';
  const keyExtractor = useCallback((item) => item.id);
  const keyExtractor2 = useCallback((item) => item.id);

  const usersCollection = firestore().collection('users');
  const todosCollection = usersCollection.doc(user.email).collection('todos');

  useEffect(() => {
    todosCollection.onSnapshot((snap) => {
      const copy = [];
      snap.forEach((doc) => {
        copy.push({...doc.data(), id: doc.id});
      });

      setTodos(copy);
    });
  }, []);
  const listFilter = lists.filter((list) => list.todos.length !== 0);
  const renderList = useCallback(({item}) => {
    const listComplete = item.todos.filter((todo) => todo.complete).length;
    const listTotal = item.todos.length;
    // item = list
    const listId = item.id;
    // eslint-disable-next-line no-shadow
    const renderTodo = ({item}) => {
      // item = todo
      return (
        <TodoTask
          task={item}
          listId={listId}
          todosCollection={todosCollection}
        />
      );
    };
    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Icon
            style={{marginBottom: -3, display: 'none'}}
            name="chevron-down"
            size={diagram.iconSize}
            color={colors.main}
          />
          <Text style={[styles.titleSpoted]}>{item.id}</Text>
          <View style={[styles.tasksNumbers]}>
            <Text style={[styles.numbersSm, styles.remaining]}>
              {listComplete}/{listTotal}
            </Text>
          </View>
        </View>
        <FlatList
          data={item.todos}
          keyExtractor={keyExtractor2}
          renderItem={renderTodo}
        />
        <View style={styles.separador} />
      </View>
    );
  }, []);
  // {todayArray[2]}, {todayArray[0]} {todayArray[1]}
  return (
    <View style={{backgroundColor: colors.bg, flex: 1}}>
      <StatusBar backgroundColor={colors.bg} />
      <Text>{}</Text>
      <View style={styles.todoHeader}>
        <Text style={[styles.headerTitle]}>{headerTitle}</Text>
        <View style={styles.rightSide} />
      </View>
      <ScrollView style={styles.todo}>
        <FlatList
          data={listFilter}
          keyExtractor={keyExtractor}
          renderItem={renderList}
        />
      </ScrollView>
      <AddTodo todosCollection={todosCollection} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={diagram.iconSize} color={colors.dim} />
        </TouchableOpacity>

        <MaisTarefas todosCollection={todosCollection} lists={lists} />
      </View>
    </View>
  );
}

export default Tarefas;
