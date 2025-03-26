import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import PostReducer from "./PostSlice";
import LoginReducer from "./LoginSlice";

const Store = configureStore({
  reducer: {
    user: UserReducer,
    posts: PostReducer,
    login: LoginReducer,
  },
});
export default Store;
