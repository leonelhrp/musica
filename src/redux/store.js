
import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from './slices';

export default configureStore({
  reducer: combinedReducer,
});
