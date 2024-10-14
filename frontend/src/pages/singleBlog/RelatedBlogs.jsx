import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogQuery } from "../../redux/features/blogs/blogsApi";

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blog = [], error, isLoading } = useFetchRelatedBlogQuery(id);

  return (
    <div>
      <h3 className="text-2xl font-medium pt-8 px-7 pb-4">Related Blogs</h3>
      <hr />
      {blog.length > 0 ? (
        <div className="space-y-4 mt-4">
          {blog.map((blog, i) => (
            <Link
              to={`/blog/${blog._id}`}
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-4 px-7 py-4 shadow-sm"
            >
              <div className="size-12">
                <img
                  src={blog.coverImg}
                  alt=""
                  className=" h-full w-full rounded-full ring-2  ring-green-700"
                />
              </div>
              <div>
                <h4 className="font-medium text-[#25a360] ">
                  {blog?.title.substring(0, 30)}...
                </h4>
                <p className="text-[12px]">
                  {blog?.description.substring(0, 38)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-7">No related blogs</div>
      )}
    </div>
  );
};

export default RelatedBlogs;
