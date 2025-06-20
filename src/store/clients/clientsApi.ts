import { Client } from "@/types";
import Api from "../api";

export const authApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    getAllClients: builder.query<Client[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["clients"],
    }),

    getClientById: builder.query<Client, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),

    addClient: builder.mutation<any, Partial<Client>>({
      query: (newClient) => ({
        url: "users",
        method: "POST",
        body: newClient,
      }),
      invalidatesTags: ["clients"],
    }),

    updateClient: builder.mutation<
      Client,
      { id: string; data: Partial<Client> }
    >({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["clients"],
    }),

    deleteClient: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clients"],
    }),
  }),
});

export const {
  useGetAllClientsQuery,
  useGetClientByIdQuery,
  useAddClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = authApi;
