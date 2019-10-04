import React from 'react';
import { StatusBar } from 'react-native';

import NavigationService from './services/navigation';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"></StatusBar>
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
};

export default App;
