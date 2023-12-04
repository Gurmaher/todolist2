import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import tasksData from 'data\tasks.json';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from the JSON file
    setTasks(tasksData);
  }, []);

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText(''); 
  };

  const handleAddRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setTaskText(randomTask); // Set the selected task in the input field
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button title="Add" onPress={handleSubmit} />
      <Button title="Generate Random Task" onPress={handleAddRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  
});

export default ToDoForm;

