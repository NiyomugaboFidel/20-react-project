// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: localStorage.getItem('token'),
  status: 'idle',
  error: null
};

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post('http://localhost:7000/api/auth/login', credentials);
  console.log(response);

  return response.data.token;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post('http://localhost:7000/api/auth/register', userData);
  console.log(response);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
