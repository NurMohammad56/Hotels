import React, { useState } from "react";
import SearchBlog from "./SearchBlog";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // Get data using redux
  const { data: blog = [], error, isLoading } = useFetchBlogsQuery(query);
  console.log(blog);

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
      <div>Blog</div>
    </div>
  );
};

export default Blog;
