import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blog?search=${search}&category=${category}&location=${location}`,
    }),
    fetchBlogbyId: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    fetchRelatedBlog: builder.query({
      query: (id) => `/related-blog/${id}`,
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogbyIdQuery,
  useFetchRelatedBlogQuery,
} = blogApi;
