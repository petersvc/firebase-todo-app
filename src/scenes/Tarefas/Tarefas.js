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
import {colors} from '../../styles/baseStyle';

function Tarefas({lists, setTodos, user, navigation}) {
  const headerTitle = 'Tarefas';
  const keyExtractor = useCallback((item) => item.id);
  const keyExtractor2 = useCallback((item) => item.id);

  const usersCollection = firestore().collection('users');
  const todosCollection = usersCollection.doc(user).collection('todos');
  /*
  const tasksCompleted = lists.map(
    (list) => list.todos.filter((todo) => todo.complete).length,
  );

  const tasksTotal = lists.map((list) => list.todos.length);

  const remaining = tasksCompleted.reduce((prev, next) => prev + next);
  const total = tasksTotal.reduce((prev, next) => prev + next);

  remaining < 10 ? (remaining = `0${remaining}`) : null;
  */
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
      // <Text style={{color: 'white'}}>{remaining}</Text>
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
          <Text style={[styles.listName]}>{item.id}</Text>
          <View style={[styles.tasksNumbers]}>
            <Text style={[styles.remaining]}>
              {listComplete}/{listTotal}
            </Text>
          </View>
        </View>
        <FlatList
          data={item.todos}
          keyExtractor={keyExtractor2}
          renderItem={renderTodo}
        />
      </View>
    );
  }, []);
  // {todayArray[2]}, {todayArray[0]} {todayArray[1]}

  return (
    <View style={{backgroundColor: colors.bg, flex: 1}}>
      <StatusBar backgroundColor={colors.bg} />
      <View style={styles.todoHeader}>
        <Text style={[styles.headerTitle]}>{headerTitle}</Text>
        <View style={styles.rightSide}>
          <Icon
            // style={[{marginRight: -5}]}
            name="basket-outline"
            size={styles.icon.size + 3}
            color={styles.colors.dim}
          />
          <MaisTarefas todosCollection={todosCollection} lists={lists} />
        </View>
      </View>
      <ScrollView style={styles.todo}>
        <FlatList
          data={listFilter}
          keyExtractor={keyExtractor}
          renderItem={renderList}
          horizontal={false}
        />
      </ScrollView>
      <AddTodo todosCollection={todosCollection} />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="menu"
          size={styles.icon.size + 2}
          color={styles.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Tarefas;
// <AddTodo todosCollection={todosCollection} />
// , {todayArray[2]} {todayArray[0]} {todayArray[1]}
/*

          <Image style={[styles.avatar]} source={{uri: googleUser.photo}} />
<View style={[styles.tasksNumbers]}>
          <Text style={[styles.remaining]}>
            {remaining}/{total}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Icon
            // style={[{marginRight: 8}]}
            name="basket-outline"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Icon
            // style={[{marginRight: 8}]}
            name="dots-vertical"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Image style={[styles.avatar]} source={{uri: googleUser.photo}} />
        </View>
*/
