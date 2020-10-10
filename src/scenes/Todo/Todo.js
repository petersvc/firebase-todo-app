import React, {useCallback, useEffect} from 'react';
import {View, FlatList, StatusBar, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import TodoHeader from './TodoHeader';
import TodoTask from '../../components/TodoTask/TodoTask';
import styles from './style';

function Todo({
  lists,
  navigation,
  setTodos,
  user,
  setUser,
  googleUser,
  setGoogleUser,
  todayArray,
}) {
  const headerTitle = 'Tarefas';
  const keyExtractor = useCallback((item) => item.id);

  const usersCollection = firestore().collection('users');
  const todosCollection = usersCollection.doc(user).collection('todos');

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
    const remaining = item.todos.filter((todo) => !todo.complete).length;
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

  return (
    <View style={styles.todo}>
      <StatusBar backgroundColor="rgb(30, 35, 38)" />

      <Text style={[styles.dateText]}>
        {todayArray[2]}, {todayArray[0]} {todayArray[1]}
      </Text>

      <FlatList
        style={styles.flatTodo}
        data={lists}
        keyExtractor={keyExtractor}
        renderItem={renderList}
      />

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
    </View>
  );
}

export default Todo;
// <AddTodo todosCollection={todosCollection} />
