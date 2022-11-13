import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'shared/services/auth/API';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = API.signup(data);
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
      const user = API.login(data);
      return user;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
