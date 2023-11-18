import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText(''); 
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
    </View>
  );
}


const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }
});

export default ToDoList;