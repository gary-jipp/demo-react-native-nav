import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = function (props) {
  const itemId = props.route.params && props.route.params.itemId;
  const info = props.route.params && props.route.params.otherParam;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello About Page:</Text>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  text: {fontSize: 24, fontWeight: '500'},
  button: {marginVertical: 5},
});

export default Home;
