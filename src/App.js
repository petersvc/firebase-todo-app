/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Todo from './scenes/Todo/Todo';
import Calendar from './scenes/Calendar/Calendar';
import Profile from './scenes/Profile/Profile';
import Settings from './scenes/Settings/Settings';
import DrawerContent from './components/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

const d = new Date();

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const today = `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;

function App() {
  const todosCollection = firestore().collection('todos');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const usrLists = ['overdue', 'today', 'tomorrow'];

  useEffect(() => {
    return todosCollection.onSnapshot((snap) => {
      const copy = [];
      snap.forEach((doc) => {
        copy.push({...doc.data(), id: doc.id});
      });
      setTodos(copy);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const lists = usrLists.map((list) => {
    const temp = {id: list, todos: []};
    const [month, day, year] = today.split(' ');
    if (temp.id === 'today') {
      temp.todos = todos.filter((todo) => todo.date === today);
    } else if (temp.id === 'overdue') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return month2 === month && year2 === year && day2 < day ? todo : null;
      });
    } else if (temp.id === 'tomorrow') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return month2 === month &&
          year2 === year &&
          Number(day2) === Number(day) + 1
          ? todo
          : null;
      });
    }
    return temp;
  });
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          // drawerType="back"
          drawerStyle={{
            // backgroundColor: '#c6cbef',
            width: '70%',
          }}
          initialRouteName="Todo"
          drawerContent={(props) => (
            <DrawerContent navigation={props.navigation} lists={lists} />
          )}>
          <Drawer.Screen name="Todo">
            {(props) => (
              <Todo
                // todos={todos}
                lists={lists}
                todosCollection={todosCollection}
                navigation={props.navigation}
              />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Calendar">
            {(props) => (
              <Calendar todos={todos} todosCollection={todosCollection} />
            )}
          </Drawer.Screen>

          <Drawer.Screen name="Profile">
            {(props) => (
              <Profile todos={todos} todosCollection={todosCollection} />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Settings">
            {(props) => (
              <Settings todos={todos} todosCollection={todosCollection} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

/*
  <Text style={{color: colors.white, marginLeft: 8}}>
    {route.name}
  </Text>
*/
