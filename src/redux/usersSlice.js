import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllUsers,
  fetchUsers,
  fetchNewUsers,
  toggleFollowing,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchAllUsers.pending]: handlePending,
    [fetchAllUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllUsers.rejected]: handleRejected,
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchUsers.rejected]: handleRejected,
    [fetchNewUsers.pending]: handlePending,
    [fetchNewUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    },
    [fetchNewUsers.rejected]: handleRejected,
    [toggleFollowing.fulfilled](state, action) {
      state.error = null;
      const index = state.items.findIndex(
        user => user.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleFollowing.rejected]: handleRejected,
  },
});

export const usersReducer = usersSlice.reducer;
