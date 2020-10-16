/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

// import {Text, View, Button, TouchableOpacity} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from './scenes/Loading/Loading';
import Login from './scenes/Login/Login';
import Tarefas from './scenes/Tarefas/Tarefas';
import GeoTasks from './scenes/GeoTasks/GeoTasks';
import Settings from './scenes/Settings/Settings';
import DrawerContent from './components/DrawerContent/DrawerContent';
import {colors, fonts, diagram} from './styles/baseStyle';

const Drawer = createDrawerNavigator();

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
  const usrLists = ['concluída', 'atrasada', 'hoje', 'amanhã', 'agendada'];
  const [user, setUser] = useState();
  const [googleUser, setGoogleUser] = useState({});

  async function signOut() {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth().signOut();
    setUser();
    setGoogleUser({});
  }

  const lists = usrLists.map((list) => {
    const temp = {id: list, todos: []};
    const [month, day, year] = today.split(' ');
    // day < 10 ? (day = 0 + day) : day;
    if (temp.id === 'concluída') {
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
        <Drawer.Navigator
          // drawerType="slide"
          drawerStyle={{
            // backgroundColor: '#c6cbef',
            width: '75%',
          }}
          initialRouteName="Loading"
          drawerContentOptions={{
            activeBackgroundColor: colors.mainBg,
            activeTintColor: colors.main,
            inactiveTintColor: colors.white,
            labelStyle: {fontSize: fonts.md},
            itemStyle: {
              paddingLeft: 22,
              marginLeft: 0,
              marginRight: 12,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            },
          }}
          screenOptions={({route}) => ({
            drawerIcon: ({focused}) => {
              let iconColor = colors.dim;
              let iconName = 'basket-outline';
              if (focused) {
                iconColor = colors.main;
              }
              if (route.name === 'Tarefas') iconName = 'clipboard-text-outline';
              else if (route.name === 'Geotasks') iconName = 'map-outline';
              else if (route.name === 'Settings') iconName = 'cog-outline';
              return (
                <Icon
                  // style={{marginRight: 0, paddingRight: 0}}
                  name={iconName}
                  size={diagram.iconSize}
                  color={iconColor}
                />
              );
            },
          })}
          drawerContent={(props) => {
            return (
              <DrawerContent
                navProps={props}
                lists={lists}
                signOut={signOut}
                googleUser={googleUser}
              />
            );
          }}>
          <Drawer.Screen name="Tarefas">
            {(props) => (
              <Tarefas
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
          </Drawer.Screen>
          <Drawer.Screen name="Geotasks">
            {(props) => <GeoTasks todos={todos} />}
          </Drawer.Screen>
          <Drawer.Screen name="Settings">
            {(props) => <Settings todos={todos} />}
          </Drawer.Screen>
          <Drawer.Screen name="Loading" options={{drawerLabel: () => null}}>
            {(props) => (
              <Loading setUser={setUser} navigation={props.navigation} />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Login" options={{drawerLabel: () => null}}>
            {(props) => <Login setGoogleUser={setGoogleUser} />}
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
