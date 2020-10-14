/* eslint-disable global-require */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
// import Modal from 'react-native-modal';

import styles from './style';

function DrawerContent({
  navigation,
  lists,
  setUser,
  googleUser,
  setGoogleUser,
}) {
  async function signOut() {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth().signOut();
    setUser();
    setGoogleUser({});
  }

  const keyExtractor = useCallback((item) => item.id);
  /*
  const tasksCompleted = lists.map(
    (list) => list.todos.filter((todo) => todo.complete).length,
  );
  
  const reducer = tasksCompleted.reduce((prev, next) => prev + next);
 */

  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;

    const colorIcon = styles.colors.dim;
    let listIcon = 'list';

    if (item.id === 'completada') {
      listIcon = 'check';
    } else if (item.id === 'atrasada') {
      listIcon = 'clock-alert-outline';
      // colorIcon = styles.colors.red;
    } else if (item.id === 'hoje') {
      listIcon = 'white-balance-sunny';
      // colorIcon = styles.colors.yellow;
    } else if (item.id === 'amanhã') {
      listIcon = 'calendar-arrow-right';
      // colorIcon = styles.colors.blue;
      // colorIcon = styles.colors.blue;
    } else if (item.id === 'agendada') {
      listIcon = 'timer-outline';
      // colorIcon = styles.colors.blue;
    }

    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Icon
            // style={{display: 'none'}}
            name={listIcon}
            size={styles.icon.size + 2}
            color={colorIcon}
          />
          <Text style={[styles.title, styles.listName]}>{item.id}</Text>
          <Text style={[styles.smallText]}>
            {item.id !== 'completada' ? remaining : item.todos.length}
          </Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.drawer}>
      <View style={styles.user}>
        <Image style={styles.avatar} source={{uri: googleUser.photo}} />
        <View style={styles.userInfo}>
          <Text style={styles.title}>{googleUser.name}</Text>
          <Text style={[styles.smallText, {marginTop: 5, opacity: 0.7}]}>
            {googleUser.email}
          </Text>
        </View>
      </View>

      <View style={styles.lists}>
        <FlatList
          data={lists}
          keyExtractor={keyExtractor}
          renderItem={renderList}
        />
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Todo')}
          style={[styles.listHeader]}>
          <Icon
            // style={{display: 'none'}}
            name="clipboard-text-outline"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Text style={[styles.title, styles.listName]}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Skills')}
          style={[styles.listHeader]}>
          <Icon
            // style={{display: 'none'}}
            name="map-marker-radius-outline"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Text style={[styles.title, styles.listName]}>Geotask</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Skills')}
          style={[styles.listHeader]}>
          <Icon
            // style={{display: 'none'}}
            name="basket-outline"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Text style={[styles.title, styles.listName]}>Compras</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            signOut();
            // toggleMenuModal();
          }}
          style={[styles.listHeader]}>
          <Icon
            name="logout-variant"
            size={styles.icon.size + 2}
            color={styles.colors.dim}
          />
          <Text style={[styles.title, styles.listName]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawerContent;

// settings, todo, groceries, skills

/*
<TouchableOpacity style={styles.menuButton}>
        <Icon
          name="menu"
          size={styles.icon.size + 4}
          color={styles.colors.white}
        />
      </TouchableOpacity>

*/
