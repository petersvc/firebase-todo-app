import React, { useCallback, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../../services/authProvider';
import { DatabaseContext } from '../../services/databaseProvider';
import AddTodo from '../../components/addTodo/AddTodo';
import More from '../../components/more/More';
import Footer from '../../components/footer/Footer';
import List from './List';
import styles from './styles';
import { diagram, colors } from '../../styles/baseStyle';

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
      <Footer navigation={navigation} googleLogout={googleLogout} />

      <FlatList
        data={notEmptySmartLists}
        renderItem={renderList}
        keyExtractor={keyExtractor}
      />

      <AddTodo addTodo={addTodo} />
    </View>
  );
};

export default Dashboard;

/* 
<More navigation={navigation} />
<TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={diagram.iconSize} color={colors.white} />
      </TouchableOpacity> */
