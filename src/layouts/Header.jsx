import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ToDoList</Text>
    </View>
  );
};




const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;