import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tagTypes = {
  CLIENTS: "clients",
  AUTH: "Auth",
} as const;

const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68547e336a6ef0ed662f3ce3.mockapi.io/",
  }),
  tagTypes: Object.values(tagTypes),
  endpoints: () => ({}),
});

export default Api;
