import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'shared/services/auth/API';

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
