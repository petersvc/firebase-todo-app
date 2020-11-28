import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// import IconIon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import More from '../more/More';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Footer = ({ navigation }) => {
   // const { weekDay, day, month } = todayDate;
   return (
      <View style={[styles.horizontalContainer, styles.footer]}>
         <TouchableOpacity
            style={[
               styles.footerItem,
               {
                  // backgroundColor: 'transparent'
               },
            ]}
            onPress={() => navigation.toggleDrawer()}>
            <Icon
               // style={{ marginLeft: 0, marginRight: 18 }}
               // name="chevron-left"
               name="text"
               size={diagram.iconSize + 4}
               color={colors.white}
            />
         </TouchableOpacity>
         <TouchableOpacity style={[styles.footerItem]}>
            <Icon
               name="clipboard-text-outline"
               size={diagram.iconSize}
               color={colors.dim}
            />
         </TouchableOpacity>
         <TouchableOpacity style={[styles.footerItem]}>
            <Icon
               name="basket-outline"
               size={diagram.iconSize}
               color={colors.dim}
            />
         </TouchableOpacity>
         <More />
      </View>
   );
};

export default Footer;
// <More />
/*
<Icon
               style={{ display: 'none', marginRight: 23 }}
               name="basket-outline"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
 <Text style={[styles.title, styles.headerTitle]}>
               {todayDate.weekDay}

               <Text style={{ color: colors.dim }}>
                  {' | '} {todayDate.day} {todayDate.month}
               </Text>
            </Text>

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
         <Icon
               style={{ marginLeft: 23, marginRight: 23, display: 'flex' }}
               name="timer-outline"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
      </View>

*/
