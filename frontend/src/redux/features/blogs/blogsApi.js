import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blog?search=${search}&category=${category}&location=${location}`,
      providesTags: ["Blogs"],
    }),
    fetchBlogbyId: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    fetchRelatedBlog: builder.query({
      query: (id) => `/related-blog/${id}`,
    }),
    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: `create-blog`,
        method: "POST",
        body: newBlog,
        credentials: "include",
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `update-blog/${id}`,
        method: "PATCH",
        body: rest,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogbyIdQuery,
  useFetchRelatedBlogQuery,
} = blogApi;
