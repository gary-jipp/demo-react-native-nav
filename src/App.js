import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from '/navigator/HomeTabs';

const App = function () {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};

export default App;
