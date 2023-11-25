import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 ToDoList</Text>
    </View>
  );

};


const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },


  footerText: {
    color: '#fff',
  },
});

export default Footer;