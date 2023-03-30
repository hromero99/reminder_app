import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    logIn: false,
    name: "",
    password: "",
  },
  reducers: {
    logIn: (state, action) => {
      // En redux como tal esto es @user/logIn
      //state.name = action.payload.name;
      //state.password = action.payload.password;
      //state.logIn = true;
    },
    logOut: (state) => {
      //state.user = null;
    },
  },
});

export const { logIn, logOut, isLogged } = userSlice.actions;
