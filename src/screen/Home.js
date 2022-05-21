import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Home = function (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Home Page</Text>
      <View style={styles.button}>
        <Button
          title="About"
          onPress={() =>
            props.navigation.navigate('About', {
              itemId: 1,
              otherParam: 'Other stuff',
            })
          }
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
