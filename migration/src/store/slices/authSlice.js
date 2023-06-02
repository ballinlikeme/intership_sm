import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorizeUser(state) {
      state.isAuth = true;
    },
    changeUserName(state, action) {
      state.userName = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { authorizeUser, changePassword, changeUserName } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
