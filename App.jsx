import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  // Function to add a new task
const addTask = (taskText) => {
  // Prevent adding an empty task or a duplicate task
  if (taskText && !tasks.includes(taskText)) {
    setTasks([...tasks, taskText]);
  }

  return (
    <SafeAreaView><ToDoList tasks={tasks} />
    <ToDoForm />
  </SafeAreaView>
);
}}
export default App;
