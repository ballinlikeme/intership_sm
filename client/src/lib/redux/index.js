import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { projectsApi } from "./api/projectsApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectsApi.middleware),
});
