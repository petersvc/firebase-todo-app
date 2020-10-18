import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import styles from './style';
import {colors, diagram} from '../../styles/baseStyle';

function DrawerContent({navProps, lists, user, signOut}) {
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
          <Icon name={listIcon} size={diagram.iconSize} color={colors.dim} />
          <Text style={[styles.title, styles.listName]}>{item.id}</Text>
          <Text style={[styles.numbersSm]}>
            {item.id !== 'concluída' ? remaining : item.todos.length}
          </Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.drawer}>
      <View style={styles.user}>
        <Image style={styles.avatar} source={{uri: user.photoURL}} />
        <View style={styles.userInfo}>
          <Text style={styles.title}>{user.displayName}</Text>
          <Text
            style={[styles.smallText2, {marginTop: 5, textTransform: 'none'}]}
            onPress={() => navProps.navigation.navigate('Todo')}>
            {user.email}
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
      <DrawerContentScrollView style={{marginLeft: -2}}>
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
            size={diagram.iconSize}
            color={colors.dim}
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
