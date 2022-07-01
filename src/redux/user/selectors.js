import { createSelector } from "@reduxjs/toolkit";

const user = (state) => state.user;

export const getUserNameSelector = createSelector(
  user,
  (state) => state.userName
);

export const getUserSelector = createSelector(user, (state) => state.user);

export const getUserReposSelector = createSelector(
  user,
  (state) => state.userRepos
);

export const getLoadingValueSelector = createSelector(
  user,
  (state) => state.loading
);

export const getErrorValueSelector = createSelector(
  user,
  (state) => state.error.isError
);

export const getErrorMessageSelector = createSelector(
  user,
  (state) => state.error.data
);
