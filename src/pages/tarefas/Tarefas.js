import React, { useCallback, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { AuthContext } from '../../services/authProvider';
import { DatabaseContext } from '../../services/databaseProvider';
import AddTodo from '../../components/addTodo/AddTodo';
import Header from '../../components/header/Header';
import todayDate from '../../services/todayDate';
import List from './List';
import styles from './styles';
// import { diagram, colors } from '../../styles/baseStyle';

const Tarefas = ({ navigation }) => {
   const { googleLogout } = useContext(AuthContext);
   const { smartLists, addTodo } = useContext(DatabaseContext);
   const notEmptySmartLists = smartLists.filter(
      (list) => list.todos.length !== 0,
   );

   const keyExtractor = useCallback((item) => item.id);
   const renderList = useCallback(({ item }) => <List list={item} />);

   return (
      <View style={[styles.verticalContainer, styles.dashboard]}>
         <Header navigation={navigation} googleLogout={googleLogout} />

         <View style={[styles.horizontalContainer, styles.dateView]}>
            <Text style={[styles.title, styles.todayDate]}>
               {todayDate.weekDay}, {todayDate.day.slice(1)}
            </Text>
         </View>

         <FlatList
            data={notEmptySmartLists}
            renderItem={renderList}
            keyExtractor={keyExtractor}
         />

         <AddTodo addTodo={addTodo} />
      </View>
   );
};

export default Tarefas;

/* 

<TouchableOpacity
            style={[styles.menuButton]}
            onPress={() => navigation.toggleDrawer()}>
            <AntIcon
               // style={{ marginRight: diagram.margin - 30 }}
               name="menufold"
               size={diagram.iconSize - 2}
               color={colors.white}
            />
         </TouchableOpacity>

<More navigation={navigation} />
<TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={diagram.iconSize} color={colors.white} />
      </TouchableOpacity> */
