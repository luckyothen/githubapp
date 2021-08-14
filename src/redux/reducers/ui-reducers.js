import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: {
    isShowSideBar: false,
    isShowUserMenu: false,
    searchValue: "",
  },
  reducers: {
    closeShowSideBar(state, action) {
      state.isShowSideBar = !state.isShowSideBar;
    },
    forceCloseShowSideBar(state, action) {
      state.isShowSideBar = false;
    },
    closeShowUserMenu(state, action) {
      state.isShowUserMenu = !state.isShowUserMenu;
    },
    forceCloseUserShowMenu(state, action) {
      state.isShowUserMenu = false;
    },
    searchValueAction(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
