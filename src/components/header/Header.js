import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import More from '../more/More';
import todayDate from '../../services/todayDate';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Header = ({ navigation }) => {
   // const { weekDay, day, month } = todayDate;
   return (
      <View style={[styles.horizontalContainer, styles.header]}>
         <View style={[styles.horizontalContainer, styles.left]}>
            <TouchableOpacity
               style={styles.menuButton}
               onPress={() => navigation.toggleDrawer()}>
               <Icon
                  style={{ marginRight: 18 }}
                  // name="chevron-left"
                  name="text"
                  size={diagram.iconSize + 8}
                  color={colors.white}
               />
            </TouchableOpacity>
            <Text style={[styles.title, styles.headerTitle, { opacity: 1 }]}>
               Tarefas
            </Text>
         </View>
         <View style={[styles.horizontalContainer, styles.mid]}>
            <Text style={[styles.title, styles.headerTitle]}>Tarefas</Text>
         </View>
         <View style={[styles.horizontalContainer, styles.right]}>
            <Icon
               style={{ display: 'flex' }}
               name="basket-outline"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
            <Icon
               style={{ marginRight: -3 }}
               name="timer-outline"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
            <More />
         </View>
      </View>
   );
};

export default Header;
// <More />
/*
<Image
               source={require('../../assets/avatar.png')}
               style={{ width: 32, height: 32, borderRadius: 100 }}
            />
<Text style={[styles.title, styles.todayDate]}>
               {todayDate.weekDay} {' | '} {''}
               <Text style={{ color: colors.dim }}>
                  {todayDate.day} {todayDate.month}
               </Text>
            </Text>
<Icon
               style={{ display: 'none' }}
               name="basket"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
            <Icon
               style={{ marginLeft: 23, marginRight: 23, display: 'none' }}
               name="timer"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
            <More />
Tarefas {''} {'-'} {''}{' '}
 <View style={[styles.horizontalContainer, styles.left]}>
            <TouchableOpacity
               style={styles.menuButton}
               onPress={() => navigation.toggleDrawer()}>
               <AntIcon
                  style={{ marginRight: diagram.margin - 30 }}
                  name="menufold"
                  size={diagram.iconSize - 20}
                  color={colors.dim}
               />
            </TouchableOpacity>
            <Text
               onPress={googleLogout}
               style={[styles.sectionTitle, styles.headerTitle]}>
               {weekDay}, {day} {month}
            </Text>
         </View>

         <View style={[styles.horizontalContainer, styles.right]}>
            <Icon
               // style={{ display: 'none' }}
               name="location-outline"
               size={diagram.iconSize - 20}
               color={colors.dim}
            />
         </View>
      </View>

*/
