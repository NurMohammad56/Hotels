import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegUser, FaBlog, FaComment } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useFetchBlogsQuery } from "../../../redux/features/blogs/blogsApi";
import { useGetCommentQuery } from "../../../redux/features/comments/commentApi";

const Dashboard = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  const { user } = useSelector((state) => state.auth);
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  // console.log(blogs);
  const { data: comments = [] } = useGetCommentQuery();
  // console.log(comments);

  return (
    <>
      {isLoading && <div>Loading....</div>}
      <div className="space-y-4">
        <div className="bg-bgPrimary p-4">
          <h1>Hello, {user.username}</h1>
          <p>Welcome to the Admin Dashboard</p>
          <p>
            Here you can manage your posts, manage rooms, ans many other tasks
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col md:flex-row justify-center pt-7 gap-8 rounded-md">
          <div className="bg-green-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaRegUser className="size-8 text-green-600" />
            <p>{user.length} User</p>
          </div>
          <div className="bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaBlog className="size-8 text-red-600" />
            <p>{blogs.length} Blogs</p>
          </div>
          <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <RiAdminLine className="size-8 text-indigo-600" />
            <p>2 Admins</p>
          </div>
          <div className="bg-amber-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaComment className="size-8 text-amber-600" />
            <p>{comments?.data} Comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
