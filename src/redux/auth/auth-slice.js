import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, getCurrentUser } from './auth-operations';

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
    [signup.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [signup.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      isLogin: true,
      token: payload.token,
      user: payload.user,
    }),
    [signup.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
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
    [logout.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [logout.fulfilled]: (state, _) => ({
      ...initialState,
    }),
    [logout.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [getCurrentUser.pending]: (state, _) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getCurrentUser.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      user: payload,
    }),
    [getCurrentUser.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      token: '',
    }),
  },
});

export default authSlice.reducer;
