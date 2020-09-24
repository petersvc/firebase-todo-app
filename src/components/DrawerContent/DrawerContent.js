/* eslint-disable global-require */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {DrawerItem} from '@react-navigation/drawer';

import styles from './style';

function DrawerContent({navigation, lists}) {
  const keyExtractor = useCallback((item) => item.id);

  const renderList = useCallback(({item}) => {
    const remaining = item.todos.filter((todo) => !todo.complete).length;
    return (
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.title}>{item.id}</Text>
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
        <Text style={styles.titleSpoted}>Smart Lists</Text>
        <FlatList
          nestedScrollEnabled
          data={lists}
          keyExtractor={keyExtractor}
          renderItem={renderList}
        />
      </View>

      <View style={styles.navigation}>
        <Text style={styles.titleSpoted}>Navigation</Text>
        <DrawerItem
          icon={() => (
            <Icon
              name="ios-basket-outline"
              size={styles.icon.size + 3}
              color={styles.icon.color}
            />
          )}
          label={() => <Text style={{color: 'white'}}>To-Do List</Text>}
          onPress={() => navigation.navigate('Todo')}
        />
        <DrawerItem
          icon={() => (
            <Icon
              name="ios-basket-outline"
              size={styles.icon.size + 3}
              color={styles.icon.color}
            />
          )}
          label={() => <Text style={{color: 'white'}}>Skills</Text>}
          onPress={() => navigation.navigate('Todo')}
        />
        <DrawerItem
          icon={() => (
            <Icon
              name="ios-calendar-outline"
              size={styles.icon.size + 3}
              color={styles.icon.color}
            />
          )}
          label={() => <Text style={{color: 'white'}}>Calendar</Text>}
          onPress={() => navigation.navigate('Todo')}
        />
        <DrawerItem
          icon={() => (
            <Icon
              name="ios-settings-outline"
              size={styles.icon.size + 3}
              color={styles.icon.color}
            />
          )}
          label={() => <Text style={{color: 'white'}}>Settings</Text>}
          onPress={() => navigation.navigate('Todo')}
        />
      </View>
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
