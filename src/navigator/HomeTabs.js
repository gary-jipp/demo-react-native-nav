import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '/screen/Home';
import About from '/screen/About';

const Tabs = createBottomTabNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

const HomeStack = function () {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="About" component={About} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
