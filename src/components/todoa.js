import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todob';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});