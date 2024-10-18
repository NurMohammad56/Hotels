import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePostCommentMutation } from "../../../redux/features/comments/commentApi";

const PostComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigate();
  // console.log(user);
  const [postComment] = usePostCommentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to comment on the post");
      navigation("/login");
      return;
    }
    const newComment = {
      comment: comment,
      user: user?._id,
      postID: id,
    };
    // console.log(newComment);
    try {
      const res = await postComment(newComment).unwrap();
      console.log(res);
    } catch (error) {
      alert("An error occurred while posting comment");
    }
  };
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-7">Leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          cols="25"
          rows="9"
          placeholder="Share your opinion about this post"
          className="w-full bg-bgPrimary focus:outline-none p-4 rounded-md"
        />
        <button className="w-full bg-primary hover:bg-[#009808] text-white font-medium rounded-md py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostComment;
