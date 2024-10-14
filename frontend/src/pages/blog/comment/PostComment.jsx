import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const { id } = useParams();
  const { comment, setComment } = useState("");
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-7">Leave a comment</h3>
      <form>
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
