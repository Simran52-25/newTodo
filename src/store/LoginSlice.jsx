import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogged: false,
  accessToken:""
};
export const checkLogin = createAsyncThunk(
  "checkLogin",
  async ({ email, password }) => {
    const response = await fetch(
      "https://api-serenify.vercel.app/api/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers:{
        "content-type":"application/json"},
      }
    );
    const data = await response.json();
    return data;
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkLogin.pending, (state, action) => {
      state.isLogged = true;
      console.log("pending");
    });
    builder.addCase(checkLogin.rejected, (state, action) => {
      state.isLogged = true;
      console.log("error");
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      state.isLogged = true;
      // console.log(action.payload.data.accessToken)
      state.accessToken=action.payload.data.accessToken
      localStorage.setItem("accessToken",state.accessToken)
      console.log("login done");
    });
  },
});
export default LoginSlice.reducer;
