import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "gitHub",
  initialState: {
    users: [],
    user: null,
    repositories: [],
    starredRepos: [],
    followers: [],
    following: [],
    loading: false,
  },
  reducers: {
    fillUsers(state, action) {
      state.users = action.payload;
    },
    fillUser(state, action) {
      state.user = action.payload;
    },
    fillRepositories(state, action) {
      state.repositories = action.payload;
    },
    filLStarredRepos(state, action) {
      state.starredRepos = action.payload;
    },
    fillFollowers(state, action) {
      state.followers = action.payload;
    },
    fillFollowing(state, action) {
      state.following = action.payload;
    },
  },
});

export const githubActions = githubSlice.actions;
export default githubSlice.reducer;
