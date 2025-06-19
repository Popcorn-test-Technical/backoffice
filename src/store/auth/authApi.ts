import { User } from "@/types";
import Api from "../api";

export const authApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<any, Partial<User>>({
      query: (user) => ({
        url: "auth/register",
        method: "POST",
        body: user,
      }),
    }),

    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
