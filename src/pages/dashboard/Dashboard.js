import React, { useCallback, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';

import { AuthContext } from '../../services/authProvider';
import { DatabaseContext } from '../../services/databaseProvider';

import AddTodo from '../../components/addTodo/AddTodo';
import More from '../../components/more/More';
import Footer from '../../components/footer/Footer';

import List from './List';
import styles from './styles';

const Dashboard = ({ navigation }) => {
  const { googleLogout } = useContext(AuthContext);
  const { smartLists, addTodo } = useContext(DatabaseContext);
  const notEmptySmartLists = smartLists.filter(
    (list) => list.todos.length !== 0,
  );

  const keyExtractor = useCallback((item) => item.id);
  const renderList = useCallback(({ item }) => <List list={item} />);

  return (
    <View style={[styles.verticalContainer, styles.dashboard]}>
      <More navigation={navigation} />
      <Text
        onPress={googleLogout}
        style={[styles.sectionTitle, styles.headerTitle]}>
        Tarefas
      </Text>
      <FlatList
        data={notEmptySmartLists}
        renderItem={renderList}
        keyExtractor={keyExtractor}
      />
      <AddTodo addTodo={addTodo} />
      <Footer navigation={navigation} addTodo={addTodo} />
    </View>
  );
};

export default Dashboard;

//
