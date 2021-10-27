import { configureStore } from '@reduxjs/toolkit';
import { squareReducer } from '../features';

export default configureStore({
  reducer: {
    square: squareReducer,
  },
});
