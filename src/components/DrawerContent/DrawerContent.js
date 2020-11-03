import React, { useCallback, useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {
   DrawerContentScrollView,
   DrawerItemList,
} from '@react-navigation/drawer';

import { DatabaseContext } from '../../services/databaseProvider';
import { AuthContext } from '../../services/authProvider';
import styles from './style';
import { colors, diagram } from '../../styles/baseStyle';

function DrawerContent({ navProps }) {
   const { smartLists } = useContext(DatabaseContext);
   const { user, googleLogout } = useContext(AuthContext);

   const FilteredLists = smartLists.slice(0, 3);

   const { state } = navProps;
   const newState = { ...state };
   newState.routes = newState.routes.slice(0, 4);

   const keyExtractor = useCallback((item) => item.id);
   const renderList = useCallback(({ item }) => {
      const remaining = item.todos.filter((todo) => !todo.complete).length;

      let listIcon = 'list';

      if (item.id === 'concluídas') {
         listIcon = 'checkmark';
      } else if (item.id === 'pendentes') {
         listIcon = 'alert-circle-outline';
      } else if (item.id === 'hoje') {
         listIcon = 'partly-sunny-outline';
      } else if (item.id === 'amanhã') {
         listIcon = 'arrow-forward';
      } else if (item.id === 'agendadas') {
         listIcon = 'alarm-outline';
      }

      return (
         <View style={styles.list}>
            <View style={styles.listHeader}>
               <Icon
                  name={listIcon}
                  size={diagram.iconSize - 1}
                  color={colors.dim}
               />
               <Text style={[styles.title, styles.listName]}>{item.id}</Text>
               <Text style={[styles.numbersSm, { color: colors.dim }]}>
                  {item.id !== 'concluídas' ? remaining : item.todos.length}
               </Text>
            </View>
         </View>
      );
   }, []);

   return (
      <View style={styles.drawer}>
         <View style={styles.user}>
            <Image style={styles.avatar} source={{ uri: user.photoURL }} />
            <View style={styles.userInfo}>
               <Text style={styles.title}>{user.displayName}</Text>
               <Text
                  style={[
                     styles.smallText2,
                     { marginTop: 3, textTransform: 'none' },
                  ]}
                  onPress={() => navProps.navigation.navigate('Todo')}>
                  {user.email}
               </Text>
            </View>
         </View>

         <View style={styles.lists}>
            <FlatList
               data={FilteredLists}
               keyExtractor={keyExtractor}
               renderItem={renderList}
            />
         </View>
         <DrawerContentScrollView style={{ marginLeft: -2 }}>
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
                  googleLogout();
                  // toggleMenuModal();
               }}
               style={[styles.listHeader]}>
               <Icon
                  name="log-out-outline"
                  size={diagram.iconSize - 1}
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
