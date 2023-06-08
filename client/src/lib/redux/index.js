import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { projectsApi } from "./api/projectsApi";
import { authApi } from "./api/authApi";
import { menuApi } from "./api/menuApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectsApi.middleware,
      authApi.middleware,
      menuApi.middleware
    ),
});
