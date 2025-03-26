import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [1, 2, 34],
  spinner: false,
};
export const getPost = createAsyncThunk("getPost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});
export const addPost = createAsyncThunk("addPost", async ({ title, body }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ body, title }),
  });
  const data = await response.json();
  return data;
});
const delPost = createAsyncThunk("delPost", async ({ postId }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "DELETE",
    body: JSON.stringify({ postId }),
  });
  return response;
});
const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetSpinner: (state, action) => {
      state.spinner = !state.spinner;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      console.log("getting post pending");
      
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      console.log("getting post fulfileed");
      state.posts = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      console.log("getting post rejected");
      console.log(action.error);
    });

    //post
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.spinner = false;
    });
  },
});
export default PostSlice.reducer;
export const { resetSpinner } = PostSlice.actions;
