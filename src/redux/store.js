import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Configure store with counter slice
const store = configureStore({
  reducer: {
    counter: counterReducer, // Set up counter slice reducer
  },
});

export default store;
