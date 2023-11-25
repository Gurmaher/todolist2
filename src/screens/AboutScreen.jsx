import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString(),
  );
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleNamePress = () => {

    setShowEasterEgg(true);
  };

  const closeEasterEgg = () => {

    setShowEasterEgg(false);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.title}>About tolistapp</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text style={styles.author}>Author:GPS </Text>
        </TouchableOpacity>
        <Text style={styles.date}>Current Date: {currentDate}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>


      <Modal visible={showEasterEgg} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>YAY!!! You found the Easter egg!</Text>
            <Button title="Close" onPress={closeEasterEgg} />
          </View>
        </View>
      </Modal>
    </MainLayout>
  );
}