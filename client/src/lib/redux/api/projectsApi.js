import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  // eslint-disable-next-line no-undef
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (name) => `/projects/${name}`,
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
