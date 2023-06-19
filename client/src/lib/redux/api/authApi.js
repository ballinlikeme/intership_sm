import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "constants";
import { authorizeUser } from "../slices/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      transformErrorResponse: (response) => {
        console.log(response.data);
        if (response.data.details) {
          return response.data.details[0];
        }
        return response.data;
      },
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.accessToken);
          dispatch(authorizeUser());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    register: builder.mutation({
      query: (requestBody) => ({
        url: "/auth/register",
        method: "POST",
        body: requestBody,
      }),
      transformErrorResponse: (response) => {
        console.log(response.data);
        if (response.data.details) {
          return response.data.details[0];
        }
        return response.data;
      },
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.accessToken);
          dispatch(authorizeUser());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    checkAuth: builder.query({
      query: () => "/auth/refresh",
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.accessToken);
          dispatch(authorizeUser());
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLazyCheckAuthQuery } =
  authApi;
