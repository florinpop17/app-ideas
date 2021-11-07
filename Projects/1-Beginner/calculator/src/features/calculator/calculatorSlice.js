import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [0],
};

export const counterSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.calculator.values;

export default counterSlice.reducer;
