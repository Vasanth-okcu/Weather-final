import { createSlice } from '@reduxjs/toolkit';

// Create slice for counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; }
  }
});

// Export actions to use in components
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer to use in store configuration
export default counterSlice.reducer;
