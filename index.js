// pages/index.js
import { useEffect, useState } from 'react';
import { getTasks, createTask, deleteTask } from '../lib/api';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    const response = await createTask({ title: newTask, completed: false });
    setTasks([...tasks, response.data]);
    setNewTask('');
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}
