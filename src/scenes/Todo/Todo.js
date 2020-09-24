import React, {useCallback} from 'react';
import {View, FlatList, StatusBar, Text} from 'react-native';

import TodoHeader from './TodoHeader';
import TodoTask from '../../components/TodoTask/TodoTask';
import AddModal from './AddModal';
import styles from './style';

function Todo({todosCollection, lists, navigation}) {
  const headerTitle = 'To-do list';

  const keyExtractor = useCallback((item) => item.id);

  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;
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
          <Text style={styles.titleSpoted}>{item.id}</Text>
          <Text style={[{marginTop: -8, marginLeft: 4}, styles.smallText]}>
            {remaining}
          </Text>
        </View>
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
      <StatusBar backgroundColor="rgba(27, 31, 36, 1)" />
      <TodoHeader headerTitle={headerTitle} navigation={navigation} />
      <FlatList
        style={styles.flatTodo}
        data={lists}
        keyExtractor={keyExtractor}
        renderItem={renderList}
      />
      <AddModal todosCollection={todosCollection} />
    </View>
  );
}

export default Todo;

/* <Text>{lists[0].todos[0].title}</Text>


          <Icon
            name="md-chevron-down"
            size={styles.icon.size - 3}
            color={styles.icon.color}
          />

          <Text style={[styles.titleSpoted, {marginLeft: 8}]}>
            ({remaining})
          </Text>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={25} color={styles.icon.color} />
      </TouchableOpacity>


*/
