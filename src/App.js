import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import data from './utils/data';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState(data);

  //ADD TASKS
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //SHOW ADD TASK FORM
  const addTaskToggle = () => {
    setShowAddTask(!showAddTask);
  };

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTaskForm={addTaskToggle}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}

      <Footer />
    </div>
  );
}

export default App;
