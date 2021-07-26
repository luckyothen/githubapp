import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "gitHub",
  initialState: { users: [], user: null, repositories: [] },
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
  },
});

export const githubActions = githubSlice.actions;
export default githubSlice.reducer;
