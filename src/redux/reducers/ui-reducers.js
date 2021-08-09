import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { isShowMenu: false, isShowUserMenu: false },
  reducers: {
    closeShowMenu(state, action) {
      state.isShowMenu = !state.isShowMenu;
    },
    forceCloseShowMenu(state, action) {
      state.isShowMenu = false;
    },
    closeShowUserMenu(state, action) {
      state.isShowUserMenu = !state.isShowUserMenu;
    },
    forceCloseUserShowMenu(state, action) {
      state.isShowUserMenu = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
