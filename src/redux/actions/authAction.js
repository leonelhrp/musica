import { createAsyncThunk } from '@reduxjs/toolkit';
import { callUserAuth } from '../../services/authService';
import { USER_AUTH } from '../types/authType';

export const userAuth = createAsyncThunk(USER_AUTH, async () => {
  const auth = await callUserAuth();
  return auth;
});
