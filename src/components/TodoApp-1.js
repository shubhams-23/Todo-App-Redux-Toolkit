// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoApp-2';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
