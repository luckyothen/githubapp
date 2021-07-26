import { configureStore } from "@reduxjs/toolkit";
import gitHubReducer from "../reducers/github-reducer";

const store = configureStore({
  reducer: { gitHubReducer },
});

export default store;
