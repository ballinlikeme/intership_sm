import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorizeUser(state) {
      state.isAuth = true;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { authorizeUser } = authSlice.actions;
