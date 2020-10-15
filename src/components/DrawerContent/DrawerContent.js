import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import styles from './style';

function DrawerContent({navProps, lists, googleUser, signOut}) {
  const {state} = navProps;
  const newState = {...state};
  newState.routes = newState.routes.slice(0, 3);

  const keyExtractor = useCallback((item) => item.id);
  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;

    let listIcon = 'list';

    if (item.id === 'concluída') {
      listIcon = 'check';
    } else if (item.id === 'atrasada') {
      listIcon = 'clock-alert-outline';
    } else if (item.id === 'hoje') {
      listIcon = 'white-balance-sunny';
    } else if (item.id === 'amanhã') {
      listIcon = 'calendar-arrow-right';
    } else if (item.id === 'agendada') {
      listIcon = 'timer-outline';
    }

    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Icon
            name={listIcon}
            size={styles.icon.size}
            color={styles.colors.dim}
          />
          <Text style={[styles.title, styles.listName]}>{item.id}</Text>
          <Text style={[styles.smallText]}>
            {item.id !== 'concluída' ? remaining : item.todos.length}
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
          <Text
            style={[styles.smallText, {marginTop: 5, opacity: 0.7}]}
            onPress={() => navProps.navigation.navigate('Todo')}>
            {googleUser.email}
          </Text>
        </View>
      </View>

      <View style={styles.lists}>
        <FlatList
          data={lists.slice(2)}
          keyExtractor={keyExtractor}
          renderItem={renderList}
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItemList
          state={newState}
          descriptors={navProps.descriptors}
          navigation={navProps.navigation}
          activeBackgroundColor={navProps.activeBackgroundColor}
          activeTintColor={navProps.activeTintColor}
          inactiveTintColor={navProps.inactiveTintColor}
          progress={navProps.activeProgress}
          labelStyle={navProps.labelStyle}
          itemStyle={navProps.itemStyle}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            signOut();
            // toggleMenuModal();
          }}
          style={[styles.listHeader]}>
          <Icon
            name="logout-variant"
            size={styles.icon.size}
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
