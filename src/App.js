import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeDrawer from '/navigator/HomeDrawer';

const App = function () {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};

export default App;
