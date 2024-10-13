import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogbyIdQuery } from "../../redux/features/blogs/blogsApi";
import SingleBlogCard from "./SingleBlogCard";
import Comments from "../blog/comment/Comments";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetchBlogbyIdQuery(id);
  return (
    <div className="text-primary container mx-auto mt-6">
      <div>
        {isLoading && <div>Loading....</div>}
        {error && <div>Something went wrong....</div>}
        {blog?.data && (
          <div className="flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-6">
            <div className="lg:w-2/3 w-full">
              <SingleBlogCard blog={blog.data} />
              <Comments comments={blog?.comments} />
            </div>
            <div className="bg-white lg:w-1/3 w-full rounded">
              Related blogs
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SingleBlog;
