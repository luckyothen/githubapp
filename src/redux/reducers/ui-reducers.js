import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { isShowMenu: false },
  reducers: {
    closeShowMenu(state, action) {
      state.isShowMenu = !state.isShowMenu;
    },
    forceCloseShowMenu(state, action) {
      state.isShowMenu = false;
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
