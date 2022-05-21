import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const About = function (props) {
  const itemId = props.route.params.itemId;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello About Page: {itemId}</Text>
      <Text style={styles.text}>{info}</Text>
      <View style={styles.button}>
        <Button
          title="About"
          onPress={() => props.navigation.push('About', {itemId: itemId + 1})}
        />
      </View>
      <View style={styles.button}>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
      </View>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Goto Top" onPress={() => props.navigation.popToTop()} />
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

export default About;
