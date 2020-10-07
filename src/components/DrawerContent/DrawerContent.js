/* eslint-disable global-require */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

import styles from './style';

function DrawerContent({
  navigation,
  lists,
  user,
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
  const tasksCompleted = lists.map(
    (list) => list.todos.filter((todo) => todo.complete).length,
  );
  const reducer = tasksCompleted.reduce((prev, next) => prev + next);
  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;
    let colorIcon;
    let listIcon = 'list';
    if (item.id === 'overdue') {
      listIcon = 'alert-circle-outline';
      colorIcon = styles.colors.red;
    } else if (item.id === 'today') {
      listIcon = 'sunny-outline';
      colorIcon = styles.colors.yellow;
    } else if (item.id === 'tomorrow') {
      listIcon = 'ios-exit-outline';
      colorIcon = styles.colors.blue;
    }
    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Icon name={listIcon} size={styles.icon.size + 2} color={colorIcon} />
          <Text
            style={[
              styles.title,
              {
                marginLeft: 16,
                marginRight: 'auto',
                textTransform: 'capitalize',
              },
            ]}>
            {item.id}
          </Text>
          <Text style={[{marginTop: -8, marginLeft: 4}, styles.smallText]}>
            {remaining}
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
          <Text style={styles.sectionTitle}>{googleUser.name}</Text>
          <Text style={[styles.smallText2, {marginTop: 5}]}>
            {googleUser.email}
          </Text>
        </View>
      </View>

      <View style={styles.lists}>
        <FlatList
          nestedScrollEnabled
          data={lists}
          keyExtractor={keyExtractor}
          renderItem={renderList}
        />
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Icon
              name="checkmark-circle-outline"
              size={styles.icon.size + 2}
              color={styles.colors.green}
            />
            <Text style={[styles.title, {marginLeft: 16, marginRight: 'auto'}]}>
              Completed
            </Text>
            <Text style={[{marginTop: -8, marginLeft: 4}, styles.smallText]}>
              {reducer}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.navigation}>
        <DrawerItem
          style={{
            marginLeft: -10,
            marginBottom: -5,
          }}
          icon={() => (
            <Icon
              name="list"
              size={styles.icon.size + 2}
              color={styles.colors.white}
            />
          )}
          labelStyle={[{marginLeft: -16}, styles.title]}
          label="To-Do List"
          onPress={() => navigation.navigate('Todo')}
        />
        <DrawerItem
          style={{
            marginLeft: -10,
            marginBottom: -5,
          }}
          icon={() => (
            <Icon
              name="ios-basket-outline"
              size={styles.icon.size + 2}
              color={styles.colors.white}
            />
          )}
          labelStyle={[{marginLeft: -16}, styles.title]}
          label="Skills"
          onPress={() => navigation.navigate('Todo')}
        />
        <DrawerItem
          style={{
            marginLeft: -10,
            marginBottom: -5,
          }}
          icon={() => (
            <Icon
              name="ios-settings-outline"
              size={styles.icon.size + 2}
              color={styles.colors.white}
            />
          )}
          labelStyle={[{marginLeft: -16}, styles.title]}
          label="Settings"
          onPress={() => navigation.navigate('Todo')}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.title}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawerContent;
