import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import More from '../more/More';
import todayDate from '../../services/todayDate';
import styles from './styles';
import { colors, diagram, fonts } from '../../styles/baseStyle';

const Header = ({ navigation, googleLogout }) => {
   const { weekDay, day, month } = todayDate;
   return (
      <View style={[styles.horizontalContainer, styles.header]}>
         <View style={[styles.horizontalContainer, styles.left]}>
            <TouchableOpacity
               style={styles.menuButton}
               onPress={() => navigation.toggleDrawer()}>
               <Icon
                  // style={{ marginRight: diagram.margin - 30 }}
                  // name="chevron-left"
                  name="menu"
                  size={diagram.iconSize + 3}
                  color={colors.dim}
               />
            </TouchableOpacity>
            <View style={[styles.verticalContainer, { marginLeft: 16 }]}>
               <Text
                  onPress={googleLogout}
                  style={[styles.headerTitle, styles.sectionTitle]}>
                  Tarefas
               </Text>
               <Text
                  style={[
                     styles.smallText2,
                     {
                        textTransform: 'capitalize',
                        fontSize: 10,
                        color: colors.dim,
                        fontFamily: fonts.family.bold,
                        display: 'none',
                     },
                  ]}>
                  {weekDay}, {day} {month}{' '}
               </Text>
            </View>
         </View>
         <View style={[styles.horizontalContainer, styles.right]}>
            <Icon
               // style={{ display: 'none' }}
               name="basket"
               size={diagram.iconSize + 2}
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
