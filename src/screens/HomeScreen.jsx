import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;