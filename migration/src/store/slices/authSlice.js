import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "",
  password: "",
  isPasswordError: false,
  isUserNameError: false,
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
    setPasswordError(state, action) {
      state.isPasswordError = action.payload;
    },
    setUserNameError(state, action) {
      state.isUserNameError = action.payload;
    },
    clearErrors(state) {
      state.isUserNameError = false;
      state.isPasswordError = false;
    },
  },
});

export const {
  authorizeUser,
  changePassword,
  changeUserName,
  setPasswordError,
  setUserNameError,
  clearErrors,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
