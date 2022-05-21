import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  user: [],
  userRepos: [],
  loading: false,
  error: {
    textError: "",
  },
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getUserData: (state, { payload }) => {
      state.userName = payload;
    },
    setUserData: (state, { payload }) => {
      state.user = payload;
    },
    setUserRepos: (state, { payload }) => {
      state.userRepos = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error.textError = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
