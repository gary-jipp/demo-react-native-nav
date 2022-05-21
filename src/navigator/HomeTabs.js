import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '/screen/Home';
import About from '/screen/About';

const Tabs = createBottomTabNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'Home') {
      const iconName = focused ? 'ios-home' : 'ios-home-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    }

    if (route.name === 'About') {
      const iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  },
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray',
});

const HomeStack = function () {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="About" component={About} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
