import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import Tarefas from '../pages/tarefas/Tarefas';
import GeoTasks from '../pages/geoTasks/GeoTasks';
import ShoppingList from '../pages/shoppingList/ShoppingList';
import Settings from '../pages/settings/Settings';
import DrawerContent from '../components/DrawerContent/DrawerContent';
import { DatabaseProvider } from '../services/databaseProvider';
import { colors, diagram, fonts } from '../styles/baseStyle';

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
   return (
      <DatabaseProvider>
         <AppDrawer.Navigator
            // drawerType="slide"
            drawerStyle={{
               width: '82%',
            }}
            // initialRouteName="Dashboard"
            drawerContentOptions={{
               activeBackgroundColor: colors.mainBg,
               activeTintColor: colors.mainAlt,
               inactiveTintColor: colors.white,
               labelStyle: { fontSize: fonts.md, marginLeft: 0 },
               itemStyle: {
                  paddingLeft: diagram.margin,
                  marginLeft: 0,
                  marginRight: 12,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
               },
            }}
            screenOptions={({ route }) => ({
               drawerIcon: ({ focused }) => {
                  let iconColor = colors.dim;
                  let iconName = 'document-text-outline';
                  if (focused) {
                     iconColor = colors.mainAlt;
                  }
                  if (route.name === 'GeoTasks') iconName = 'location-outline';
                  else if (route.name === 'ShoppingList')
                     iconName = 'basket-outline';
                  else if (route.name === 'Settings')
                     iconName = 'settings-outline';
                  return (
                     <Icon
                        // style={{ marginRight: 0, paddingRight: 0 }}
                        name={iconName}
                        size={diagram.iconSize - 2}
                        color={iconColor}
                     />
                  );
               },
            })}
            drawerContent={(props) => {
               return <DrawerContent navProps={props} />;
            }}>
            <AppDrawer.Screen name="Tarefas" component={Tarefas} />
            <AppDrawer.Screen name="GeoTasks" component={GeoTasks} />
            <AppDrawer.Screen name="ShoppingList" component={ShoppingList} />
            <AppDrawer.Screen name="Settings" component={Settings} />
         </AppDrawer.Navigator>
      </DatabaseProvider>
   );
};

export default AppRoutes;
