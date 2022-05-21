import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '/screen/Home';
import About from '/screen/About';

const Stack = createNativeStackNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();

const headerTitle = (options) => {
  console.log(options);
  return (
    <Text style={styles.text}>
      Home Page Title
    </Text>
  );
};

const HomeStack = function () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Page', headerTitle}}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  text: {fontSize: 24, fontWeight: '500', color: 'red'},
});


export default HomeStack;
