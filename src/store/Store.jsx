import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import PostReducer from "./PostSlice";

const Store = configureStore({
  reducer: {
    user: UserReducer,
    posts: PostReducer,
  },
});
export default Store;
