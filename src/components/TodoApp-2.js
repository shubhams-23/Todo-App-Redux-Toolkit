// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleComplete(state, action) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask(state, action) {
      const { id, newText } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
  },
});

export const { addTask, removeTask, toggleComplete, editTask } = todosSlice.actions;

export default todosSlice.reducer;
