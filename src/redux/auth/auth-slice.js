import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth-operations';

const initialState = {
  isLogin: false,
  user: [],
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [login.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      isLogin: true,
      token: payload.token,
      user: payload.user,
    }),
    [login.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;
