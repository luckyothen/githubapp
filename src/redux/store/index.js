import { configureStore } from "@reduxjs/toolkit";
import gitHubReducer from "../reducers/github-reducer";
import uiReducer from "../reducers/ui-reducers";

const store = configureStore({
  reducer: { gitHubReducer, uiReducer },
});

export default store;
