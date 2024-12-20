import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/post-comment",
        method: "POST",
        body: commentData,
      }),
      invalidApi: (result, error, { postId }) => [
        { type: "Comments", id: postId },
      ],
    }),
    getComment: builder.query({
      query: () => ({
        url: "/all-comment",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommentQuery, usePostCommentMutation } = commentApi;
export default commentApi;
