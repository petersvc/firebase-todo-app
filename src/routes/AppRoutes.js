import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../pages/Dashboard/Dashboard';
import { DatabaseProvider } from '../services/databaseProvider';

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <DatabaseProvider>
      <AppDrawer.Navigator>
        <AppDrawer.Screen name="Dashboard" component={Dashboard} />
      </AppDrawer.Navigator>
    </DatabaseProvider>
  );
};

export default AppRoutes;
