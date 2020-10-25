import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import React from 'react';
import Providers from './routes';
import { colors } from './styles/baseStyle';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.bg} />
      <Providers />
    </>
  );
};

export default App;
