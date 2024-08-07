// components/TaskList.js
import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../lib/api';

const TaskList = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        {task.title} {task.completed ? '✓' : '✗'}
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
