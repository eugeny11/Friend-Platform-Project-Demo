import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
let expire = localStorage.getItem("expire")
  ? localStorage.getItem("expire")
  : "";

const initialState = {
  expire: expire,
  token: token,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setExpire: (state, action) => {
      state.expire = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    getSignInFetch: (state, action) => {
      state.isLoading = true;
    },
    getSignInSuccess: (state, action) => {
      state.expire = action.payload.expire;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    getSignInFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateToken: () => {},
  },
});

export const {
  setExpire,
  setToken,
  getSignInFetch,
  getSignInSuccess,
  getSignInFailure,
  updateToken,
} = signInSlice.actions;
export { token, expire };
export default signInSlice.reducer;
