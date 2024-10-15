import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/all-user",
        method: "GET",
      }),
      refetchOnMount: true,
      invalidatesTags: ["USER"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/delete-user/${userId}`,
        method: "DELETE",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/update-user/${userId}`,
        method: "PUT",
        body: { role },
      }),
      refetchOnMount: true,
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = authApi;
export default authApi;
