import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/comments",
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
        { types: "Comments", id: postId },
      ],
    }),
    getComment: builder.query({
      query: "/all-comment",
      method: "GET",
    }),
  }),
});

export const { useGetCommentQuery, usePostCommentMutation } = commentApi;
export default commentApi;
