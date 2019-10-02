import React from 'react';
import { StatusBar } from 'react-native';

import Header from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"></StatusBar>
      <Header />
      <Routes />
    </>
  );
};

export default App;
