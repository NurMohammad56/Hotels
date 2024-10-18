import React from "react";
import commentorImg from "../../../asstes/hero-carosel/pexels-photo-261102.jpeg";
import { formateDate } from "./../../../utility/formateDate";
import PostComment from "./PostComment";
import { useSelector } from "react-redux";

const Comments = ({ comments }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="my-4 bg-white p-6">
      <div>
        {comments?.length > 0 ? (
          <div className="text-sm font-medium">
            <h3>All comments</h3>
            <div>
              {comments.map((comment, i) => (
                <div key={i} className="mt-4">
                  <div className="flex gap-3 items-center">
                    <img src={commentorImg} alt="" className="h-12 w-12" />
                    <div>
                      <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                        {comment?.user?.username}
                      </p>

                      <p className="text-[11px] italic">
                        {formateDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  {/* Comment details */}
                  <div className="text-gray-600 mt-4 border p-3">
                    <p className="md:w-4/5">{comment?.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-lg font-medium">No comment found </div>
        )}
      </div>

      {/* Comment input field here */}
      <PostComment />
    </div>
  );
};

export default Comments;
