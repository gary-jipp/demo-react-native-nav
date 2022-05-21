import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Button} from 'react-native';
import Home from '/screen/Home';
import About from '/screen/About';

const Stack = createNativeStackNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

// Can be function or Object
const options = ({navigation, route}) => ({
  title: 'Home Page',
  headerLeft: () => (
    <Button title="A" onPress={() => navigation.push("About")} />),
});

// can be a function or object
const screenOptions = ({navigation, route}) => (
  {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
);

const HomeStack = function () {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={options}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default HomeStack;
