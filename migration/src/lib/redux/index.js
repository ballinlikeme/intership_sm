import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "features/authentication";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
