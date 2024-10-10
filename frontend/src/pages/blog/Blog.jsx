import React, { useState } from "react";
import SearchBlog from "./SearchBlog";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

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
      <div>Blog</div>
    </div>
  );
};

export default Blog;
