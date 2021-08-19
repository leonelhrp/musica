import { combineReducers } from 'redux';
import authReducer from './authSlice';
import songsReducer from './songsSlice';

const combinedReducer = combineReducers({
  authReducer,
  songsReducer,
});

export default combinedReducer;
