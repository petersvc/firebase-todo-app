/* eslint-disable global-require */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import styles from './style';

function DrawerContent({navigation, lists}) {
  const keyExtractor = useCallback((item) => item.id);
  const tasksCompleted = lists.map(
    (list) => list.todos.filter((todo) => todo.complete).length,
  );
  const reducer = tasksCompleted.reduce((prev, next) => prev + next);
  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;
    let listIcon = 'list';
    if (item.id === 'overdue') {
      listIcon = 'alert-circle-outline';
    } else if (item.id === 'today') {
      listIcon = 'sunny-outline';
    } else if (item.id === 'tomorrow') {
      listIcon = 'ios-exit-outline';
    }
    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Icon
            name={listIcon}
            size={styles.icon.size + 2}
            color={styles.icon.color}
          />
          <Text style={[styles.title, {marginLeft: 16, marginRight: 'auto'}]}>
            {item.id}
          </Text>
          <Text style={[{marginTop: -8, marginLeft: 4}, styles.smallText]}>
            {remaining}
          </Text>
        </View>
      </View>
    );
  }, []);
  //   <Text style={[styles.titleSpoted, {marginBottom: 10}]}>Navigation</Text>
  //  <Text style={[styles.titleSpoted, {marginBottom: 20}]}>
  //  Smart Lists
  //  </Text>

  return (
    <View style={styles.drawer}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
        <View style={styles.userInfo}>
          <Text style={styles.sectionTitle}>Peter Costa</Text>
          <Text style={[styles.smallText2, {marginTop: 5}]}>
            petersvcosta@gmail.com
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
              color={styles.icon.color}
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

      <DrawerContentScrollView style={styles.navigation}>
        <DrawerItem
          style={{
            marginLeft: -10,
            marginBottom: -5,
          }}
          icon={() => (
            <Icon
              name="list"
              size={styles.icon.size + 2}
              color={styles.icon.color}
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
              color={styles.icon.color}
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
          activeBackgroundColor="blue"
          activeTintColor="rgb(20,20,20)"
          icon={() => (
            <Icon
              name="ios-calendar-outline"
              size={styles.icon.size + 2}
              color={styles.icon.color}
            />
          )}
          labelStyle={[{marginLeft: -16}, styles.title]}
          label="Calendar"
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
              color={styles.icon.color}
            />
          )}
          labelStyle={[{marginLeft: -16}, styles.title]}
          label="Settings"
          onPress={() => navigation.navigate('Todo')}
        />
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

/*
<FlatList
          // data={lists}
          // keyExtractor={keyExtractor}
          // renderItem={renderList}
          />
<View>
          <DrawerItem
            icon={() => (
              <Icon
                name="ios-basket-outline"
                size={styles.icon.size + 3}
                color={styles.icon.color}
              />
            )}
            label="To-Do List"
            onPress={() => navigation.navigate('Todo')}
          />
        </View>
*/
