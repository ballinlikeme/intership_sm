import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

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
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.accessToken;
      }
    );
  },
});

export const authReducer = authSlice.reducer;
export const { authorizeUser } = authSlice.actions;
