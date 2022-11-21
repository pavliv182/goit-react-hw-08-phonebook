import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'shared/services/API';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.signup(data);
      return user;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.login(data);
      return user;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.logout();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { token } = auth;
      if (!Boolean(token.length)) {
        // или throw Error;
        return rejectWithValue('no Token');
      }

      const user = await API.getCurrent(token);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
