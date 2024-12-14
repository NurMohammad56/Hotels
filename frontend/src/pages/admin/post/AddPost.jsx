import React from "react";

const AddPost = () => {
  return (
    <div className="bg-white md:p-7 p-2">
      <h2 className="text-2xl font-semibold">Create A New Blog Post</h2>
      <form className="space-y-5 pt-6">
        <div className="space-y-3">
          <label className="font-semibold text-xl">Blog Title:</label>
          <input
            className="w-full inline-block bg-bgPrimary focus:outline-none px-y py-2"
            type="text"
            placeholder="Write here..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
