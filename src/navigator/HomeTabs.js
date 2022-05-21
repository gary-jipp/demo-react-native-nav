import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '/screen/Home';
import About from '/screen/About';

const Tabs = createBottomTabNavigator();

const HomeTabIcon = () => {
  return <Ionicons name="ios-home" size={25} color="red" />;
};

// Options can be an object
// tabBarIcon must "be" a component or "return" a component
const homeOptions1 = {
  tabBarIcon: HomeTabIcon,
};

// Options can be an object
// tabBarIcon must be a component or return a component
const homeOptions = {
  tabBarIcon: ({focused, color, size}) => {
    // console.log('size=', size);
    const iconName = focused ? 'ios-home' : 'ios-home-outline';
    return <Ionicons name={iconName} size={size} color={color} />;
  },
};

// Options can also be a Function
const homeOptionsFn = ({navigation, route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    const iconName = focused ? 'ios-home' : 'ios-home-outline';
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

// About Options object
const aboutOptions = {
  tabBarIcon: ({focused, color, size}) => {
    const iconName = focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
    return <Ionicons name={iconName} size={size} color={color} />;
  },
};

const screenOptions = ({navigator, route}) => ({
  tabBarActiveTintColor: 'red',
  tabBarInactiveTintColor: 'gray',
});

const HomeStack = function () {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="Home" component={Home} options={homeOptions} />
      <Tabs.Screen name="About" component={About} options={aboutOptions} />
    </Tabs.Navigator>
  );
};

export default HomeStack;
