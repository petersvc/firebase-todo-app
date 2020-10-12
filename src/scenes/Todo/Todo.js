import React, {useCallback, useEffect} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TodoTask from '../../components/TodoTask/TodoTask';
import AddTodo from './AddTodo';
import styles from './style';

function Todo({lists, setTodos, user, todayArray, navigation}) {
  const headerTitle = 'Tarefas';
  const keyExtractor = useCallback((item) => item.id);

  const usersCollection = firestore().collection('users');
  const todosCollection = usersCollection.doc(user).collection('todos');

  const tasksCompleted = lists.map(
    (list) => list.todos.filter((todo) => todo.complete).length,
  );

  const tasksTotal = lists.map((list) => list.todos.length);

  const remaining = tasksCompleted.reduce((prev, next) => prev + next);
  const total = tasksTotal.reduce((prev, next) => prev + next);

  // remaining < 10 ? (remaining = `0${remaining}`) : null;

  useEffect(() => {
    todosCollection.onSnapshot((snap) => {
      const copy = [];
      snap.forEach((doc) => {
        copy.push({...doc.data(), id: doc.id});
      });
      setTodos(copy);
    });
  }, []);

  const renderList = useCallback(({item}) => {
    // const remaining = item.todos.filter((todo) => !todo.complete).length;
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
        <FlatList
          data={item.todos}
          keyExtractor={keyExtractor}
          renderItem={renderTodo}
          initialNumToRender={8}
        />
      </View>
    );
  }, []);
  // {todayArray[2]}, {todayArray[0]} {todayArray[1]}
  return (
    <View style={styles.todo}>
      <StatusBar backgroundColor="rgb(30, 35, 38)" />
      <View style={styles.todoHeader}>
        <Text style={[styles.headerTitle]}>{headerTitle}</Text>
        <View style={[styles.tasksNumbers]}>
          <Text style={[styles.remaining]}>
            {remaining}/{total}
          </Text>
        </View>
      </View>

      <FlatList
        style={styles.flatTodo}
        data={lists}
        keyExtractor={keyExtractor}
        renderItem={renderList}
      />
      <AddTodo todosCollection={todosCollection} />
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="menu"
          size={styles.icon.size + 4}
          color={styles.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Todo;
// <AddTodo todosCollection={todosCollection} />
// , {todayArray[2]} {todayArray[0]} {todayArray[1]}
/*
          <Text style={[styles.remaining, {display: 'none'}]}>
            {todayArray[2]} {todayArray[0]} {todayArray[1]}
          </Text>
<View style={styles.bottomHead}>
          <Text style={[styles.headerTitle]}>
            {todayArray[2]}, {todayArray[0]} {todayArray[1]}
          </Text>
          <Text style={[styles.remaining]}>{reducer} tarefas restantes</Text>
        </View>
<View style={styles.topHead}>
          <Icon
            // style={{display: 'none'}}
            name="basket-outline"
            size={styles.icon.size + 4}
            color={styles.colors.dim}
          />
          <Icon
            // style={{display: 'none'}}
            name="timer-outline"
            size={styles.icon.size + 4}
            color={styles.colors.dim}
          />
          <Icon
            // style={{display: 'none'}}
            name="dots-vertical"
            size={styles.icon.size + 4}
            color={styles.colors.dim}
          />
        </View>
 <Icon
          // style={{display: 'none'}}
          name="dots-vertical"
          size={styles.icon.size + 7}
          color={styles.colors.white}
        />
<Text style={[styles.dateText]}>
  , {todayArray[2]} {todayArray[0]} {todayArray[1]}
</Text>
<TodoHeader
        headerTitle={headerTitle}
        navigation={navigation}
        todayArray={todayArray}
        todosCollection={todosCollection}
        lists={lists}
        user={user}
        setUser={setUser}
        googleUser={googleUser}
        setGoogleUser={setGoogleUser}
      />
*/
