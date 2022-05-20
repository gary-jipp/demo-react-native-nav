/* eslint-disable no-alert */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '/screen/Home';
import About from '/screen/About';

const Drawer = createDrawerNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

// Custom Content Conponent with a "slot" for more content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Not much Help!')} />
    </DrawerContentScrollView>
  );
}

const HomeDrawer = function () {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
