import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6478842a362560649a2def56.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchFirstUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`users?page=1&limit=3`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchNewUsers = createAsyncThunk(
  'users/fetchNewUsers',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axios.get(`users?page=${pageNumber}&limit=3`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFollowing = createAsyncThunk(
  'users/toggleFollowing',
  async ({ user, value }, thunkAPI) => {
    try {
      const response = await axios.put(`users/${user.id}`, {
        following: !user.following,
        followers: user.followers + value,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
