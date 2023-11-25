import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Animated
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  const handleNamePress = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setShowEasterEgg(true);
  };

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
  };

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>About ToDoList App</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text style={styles.author}>Author: GPS</Text>
        </TouchableOpacity>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>

      <Modal
        visible={showEasterEgg}
        animationType="slide"
        transparent={true}
      >
        <Animated.View style={[styles.modalContainer, {opacity: fadeAnim}]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>YAY!!! You found the Easter egg!</Text>
            <Button title="Close" onPress={closeEasterEgg} />
          </View>
        </Animated.View>
      </Modal>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  author: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default AboutScreen;
