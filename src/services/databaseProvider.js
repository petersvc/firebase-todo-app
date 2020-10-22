import React, { createContext, useContext, useState, useEffect } from 'react';

import firestore from '@react-native-firebase/firestore';
import { AuthContext } from './authProvider';
import todayDate from './todayDate';

export const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [todos, setTodos] = useState([]);

  const firebaseUsers = firestore().collection('users');

  async function addUserInfo() {
    await firebaseUsers.doc(user.email).set(
      {
        nome: user.displayName,
        email: user.email,
        foto: user.photoURL,
      },
      { merge: true },
    );
  }

  const firebaseUsersTodos = firebaseUsers.doc(user.email).collection('todos');

  useEffect(() => {
    addUserInfo();
    firebaseUsersTodos.onSnapshot((snap) => {
      const copy = [];
      snap.forEach((doc) => {
        copy.push({ ...doc.data(), id: doc.id });
      });

      setTodos(copy);
    });
  }, []);

  const smartListsNames = [
    'concluída',
    'atrasada',
    'hoje',
    'amanhã',
    'agendada',
  ];

  const { month, day, year } = todayDate;

  const today = `${month} ${day} ${year}`;

  const smartLists = smartListsNames.map((list) => {
    const temp = { id: list, todos: [] };
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

  return (
    <DatabaseContext.Provider
      value={{
        todos,
        smartLists,
        todayDate,
        updateTodo: async (taskId, todo) => {
          await firebaseUsersTodos.doc(taskId).update(todo);
        },
        deleteTodo: async (taskId) => {
          await firebaseUsersTodos.doc(taskId).delete();
        },
      }}>
      {children}
    </DatabaseContext.Provider>
  );
};
