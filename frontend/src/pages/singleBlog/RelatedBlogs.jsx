import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchRelatedBlogQuery } from "../../redux/features/blogs/blogsApi";

const RelatedBlogs = () => {
  const { id } = useParams();
  const { data: blog = [], error, isLoading } = useFetchRelatedBlogQuery(id);
  console.log(blog);

  return (
    <div>
      <h3 className="text-2xl font-medium pt-6 px-7 pb-4">Related Blogs</h3>
      <hr />
      {blog.length > 0 ? (
        <div className="p-7">No related blogs</div>
      ) : (
        <div className="space-y-4 mt-4">
          {blog.map((blog) => (
            <Link>
              <div>
                <img src={blog.coverImg} alt="" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedBlogs;
