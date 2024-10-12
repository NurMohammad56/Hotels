import React, { useState } from "react";
import SearchBlog from "./SearchBlog";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { Link } from "react-router-dom";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // Get data using redux
  const { data: blog = [], error, isLoading } = useFetchBlogsQuery(query);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => setQuery({ search, category });
  return (
    <div className="mt-1 container mx-auto">
      <SearchBlog
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />

      {isLoading && <div>Loading.......</div>}
      {error && <div>{error.toString()}</div>}

      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blog.map((blog) => (
          <Link to={`/blog/${blog._id}`} key={blog._id} className="shadow-md">
            <img src={blog.coverImg} alt="" className="h-40 w-full" />
            <h3 className="text-sm p-2">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
