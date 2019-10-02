import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"></StatusBar>
      <Routes />
    </>
  );
};

export default App;
