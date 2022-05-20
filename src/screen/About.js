import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Page</Text>
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
