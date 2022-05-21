import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = function (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello About Page</Text>
      <Button
        title="About"
        onPress={() => props.navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  text: {fontSize: 24, fontWeight: '500'},
});

export default Home;
