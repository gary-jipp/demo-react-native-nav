import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from '/screen/Home';
import About from '/screen/About';

const App = function () {
  return (
    <SafeAreaView>
      <Home />
      <About />
    </SafeAreaView>
  );
};

export default App;
