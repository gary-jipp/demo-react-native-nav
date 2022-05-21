import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '/screen/Home';
import About from '/screen/About';

const Drawer = createDrawerNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

const HomeDrawer = function () {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Page'}}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
