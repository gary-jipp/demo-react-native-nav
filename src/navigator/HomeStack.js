import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '/screen/Home';
import About from '/screen/About';

const Stack = createNativeStackNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

const HomeStack = function () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default HomeStack;
