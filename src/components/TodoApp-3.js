// TodoApp-3.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleComplete, editTask } from './TodoApp-2';

const TodoList = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    // Dispatch addTask action
    dispatch(addTask({ id: tasks.length + 1, text: 'New Task', completed: false }));
  };

  const handleRemove = id => {
    // Dispatch removeTask action
    dispatch(removeTask(id));
  };

  const handleToggleComplete = id => {
    // Dispatch toggleComplete action
    dispatch(toggleComplete(id));
  };

  const handleEdit = (id, newText) => {
    // Dispatch editTask action
    dispatch(editTask({ id, newText }));
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={e => handleEdit(task.id, e.target.value)}
            />
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
