import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectUsers = state => state.users.items;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectStatusFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.following:
        return users.filter(user => user.following);
      case statusFilters.unfollowing:
        return users.filter(user => !user.following);
      default:
        return users;
    }
  }
);
