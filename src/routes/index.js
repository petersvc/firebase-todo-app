import React from 'react';

import { AuthProvider } from '../services/authProvider';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
