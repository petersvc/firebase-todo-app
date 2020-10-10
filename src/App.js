/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {Text, View, Button, TouchableOpacity} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from './scenes/Loading/Loading';
import Login from './scenes/Login/Login';
import Todo from './scenes/Todo/Todo';
import Skills from './scenes/Skills/Skills';
import Settings from './scenes/Settings/Settings';

const Stack = createStackNavigator();

const d = new Date();

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const weekDay = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

const dayDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

const today = `${months[d.getMonth()]} ${
  d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
} ${d.getFullYear()}`;

const todayArray = [dayDate, months[d.getMonth()], weekDay[d.getDay()]];

function App() {
  const [todos, setTodos] = useState([]);
  const usrLists = ['completada', 'atrasada', 'hoje', 'amanhã', 'agendada'];
  const [user, setUser] = useState();
  const [googleUser, setGoogleUser] = useState({});

  const lists = usrLists.map((list) => {
    const temp = {id: list, todos: []};
    const [month, day, year] = today.split(' ');
    // day < 10 ? (day = 0 + day) : day;
    if (temp.id === 'completada') {
      temp.todos = todos.filter((todo) => todo.complete);
    } else if (temp.id === 'hoje') {
      temp.todos = todos.filter(
        (todo) => todo.date === today && !todo.complete,
      );
    } else if (temp.id === 'atrasada') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          day2 < day
          ? todo
          : null;
      });
    } else if (temp.id === 'amanhã') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          Number(day2) === Number(day) + 1
          ? todo
          : null;
      });
    } else if (temp.id === 'agendada') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          Number(day2) > Number(day) + 1
          ? todo
          : null;
      });
    }
    return temp;
  });

  // async function createUser() {
  //   const usr = usersCollection.doc(user.email);
  //   await usr.set({}, {merge: true});
  //   await usr.collection('todos').doc('test').set({}, {merge: true});
  // }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading">
            {(props) => (
              <Loading setUser={setUser} navigation={props.navigation} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => <Login setGoogleUser={setGoogleUser} />}
          </Stack.Screen>
          <Stack.Screen name="Todo">
            {(props) => (
              <Todo
                user={user}
                setUser={setUser}
                googleUser={googleUser}
                setGoogleUser={setGoogleUser}
                setTodos={setTodos}
                lists={lists}
                navigation={props.navigation}
                todayArray={todayArray}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Skills">
            {(props) => <Skills todos={todos} />}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {(props) => <Settings todos={todos} />}
          </Stack.Screen>
        </Stack.Navigator>
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
