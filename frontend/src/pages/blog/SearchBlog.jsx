import React from "react";

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full flex">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="Hotels with best view near me..."
        className="py-1 px-4 mr-5 mt-10 w-full bg-[#efefef] focus:outline-none focus:border rounded"
      />
      <button className="bg-[#009808] py-1 px-4 mt-10 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBlog;
