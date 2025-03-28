import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogged: false,
  isLoading: false,
  error: "",
};

export const checkLogin = createAsyncThunk(
  "checkLogin",
  async ({ email, password }) => {
    const response = await fetch(
      "https://api-serenify.vercel.app/api/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("DATA", data);
    return data;
  }
);

export const tryAccessLogin = createAsyncThunk("tryAccessLogin", async () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("try access login");
  if (accessToken) {
    const response = await fetch(
      "https://api-serenify.vercel.app/api/users/current-user",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }
});

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("accessToken");
      state.isLogged = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkLogin.pending, (state, action) => {
      state.isLoading = true;
      // console.log("pending");
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      if (action.payload.success) {
        state.error = "";
        state.isLogged = true;
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        console.log("login done");
      } else {
        state.error = action.payload.message;
      }
    });
    builder.addCase(tryAccessLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(tryAccessLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      if (action.payload) {
        state.isLogged = true;
      }
    });
  },
});
export default LoginSlice.reducer;
export const { logout } = LoginSlice.actions;
