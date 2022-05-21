import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = function () {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Nav Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alightItems: 'center',
    justifyContent: 'center',
    // borderWidth: 4,
    borderColor: '#C0C3Ca',
  },
  text: {fontSize: 20, fontWeight: '700', color: '#777'},
});

export default Header;
