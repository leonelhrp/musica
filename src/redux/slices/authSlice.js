import { createSlice } from '@reduxjs/toolkit'
import { userAuth } from '../actions/authAction';

const initialState = {
  auth: {},
  authStatus: 'idle',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state, action) => {
      state.auth = action.payload
    },
  },
  extraReducers: {
    [userAuth.pending]: (state) => {
      state.authStatus = 'loading';
    },
    [userAuth.rejected]: (state) => {
      state.authStatus = 'error';
    },
    [userAuth.fulfilled]: (state, action) => {
      state.authStatus = action?.payload?.error ? 'error' : 'succeded';
      state.auth = action?.payload?.auth || {};
    },
  },
})

// Action creators are generated for each case reducer function
export const { resetAuth } = authSlice.actions

export default authSlice.reducer