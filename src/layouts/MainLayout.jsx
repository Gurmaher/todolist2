import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header'; 
import Footer from './Footer'; 

const MainLayout = ({ Heroes}) => {
  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>{Heroes}</View>
      <Footer /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
});

export default MainLayout;