import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../createSlices/post";
import userReducer from "../createSlices/user";
const rootReducer = {
  posts: postReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
