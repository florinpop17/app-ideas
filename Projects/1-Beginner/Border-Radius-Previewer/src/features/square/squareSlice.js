import { createSlice } from '@reduxjs/toolkit';

/* SECTION Structure

NOTE Before slash
first value applies to top-left corner
second value applies to top-right corner
third value applies to bottom-right corner
fourth value applies to bottom-left corner

NOTE After slash
first value applies to left-top corner
second value applies to right-top corner
third value applies to right-bottom corner
fourth value applies to left-bottom corner

0% 0% 0% 0% / 0% 0% 0% 0%

!SECTION  */

const initialState = {
  bottomLeft: 0,
  bottomRight: 0,
  topLeft: 0,
  topRight: 0,
  leftTop: 0,
  rightTop: 0,
  rightBottom: 0,
  leftBottom: 0,
};

export const squareSlice = createSlice({
  name: 'square',
  initialState,
  reducers: {
    increment: (state, action) => {
      state[action.side] += 1;
    },
    decrement: (state, action) => {
      state[action.side] -= 1;
    },
    adjust: (state, action) => {
      state[action.payload.side] = action.payload.value;
    },
  },
});

export const { adjust, increment, decrement } = squareSlice.actions;
export const selectBottomLeft = ({ square }) => square.bottomLeft;
export const selectBottomRight = ({ square }) => square.bottomRight;
export const selectTopLeft = ({ square }) => square.topLeft;
export const selectTopRight = ({ square }) => square.topRight;
export const selectLeftTop = ({ square }) => square.leftTop;
export const selectRightTop = ({ square }) => square.rightTop;
export const selectRightBottom = ({ square }) => square.rightBottom;
export const selectLeftBottom = ({ square }) => square.leftBottom;

export default squareSlice.reducer;
