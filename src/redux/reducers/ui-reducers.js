import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { isShowMenu: false },
  reducers: {
    closeShowMenu(state, action) {
      state.isShowMenu = !state.isShowMenu;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
