import React, {useCallback, useEffect} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TodoTask from '../../components/TodoTask/TodoTask';
import AddTodo from './AddTodo';
import styles from './style';
import {colors} from '../../styles/baseStyle';

function Todo({lists, setTodos, user, googleUser, navigation}) {
  const headerTitle = 'Tarefas';
  const keyExtractor = useCallback((item) => item.id);
  const keyExtractor2 = useCallback((item) => item.id);

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
          // horizontal={false}
          // initialNumToRender={8}
          numColumns={2}
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
            // style={[{marginRight: 8}]}
            name="basket-outline"
            size={styles.icon.size + 1}
            color={styles.colors.dim}
          />
          <Icon
            // style={{opacity: 0}}
            onPress={() => navigation.toggleDrawer()}
            name="dots-vertical"
            size={styles.icon.size + 3}
            color={styles.colors.dim}
          />
          <Image style={[styles.avatar]} source={{uri: googleUser.photo}} />
        </View>
      </View>
      <ScrollView style={styles.todo}>
        <FlatList
          // style={{flex: 1, backgroundColor: 'red'}}
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

export default Todo;
// <AddTodo todosCollection={todosCollection} />
// , {todayArray[2]} {todayArray[0]} {todayArray[1]}
/*
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
