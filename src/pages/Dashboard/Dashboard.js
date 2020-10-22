import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../services/authProvider';
import { DatabaseContext } from '../../services/databaseProvider';

const Dashboard = () => {
  const { googleLogout, user } = useContext(AuthContext);
  const { smartLists } = useContext(DatabaseContext);

  return (
    <View>
      <Text onPress={googleLogout}>Dashboard, user: {user.displayName}</Text>
      <Text>
        {smartLists.map((list) => list.todos.map((todo) => todo.title))}
      </Text>
    </View>
  );
};

export default Dashboard;

//
