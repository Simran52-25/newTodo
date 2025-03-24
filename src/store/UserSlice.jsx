import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLoading: false,
};

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  // console.log("fetchuser called")
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log("pending")
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("fulfilled")
      console.log("action", action);
      state.users=action.payload
      state.isLoading=false;
    });
   
  },
});
export default UserSlice.reducer;
// export const { increment } = UserSlice.actions;
