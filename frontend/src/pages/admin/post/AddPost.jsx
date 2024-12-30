import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="bg-white md:p-7 p-2">
      <h2 className="text-2xl font-semibold">Create A New Blog Post</h2>
      <form className="space-y-5 pt-6">
        <div className="space-y-3">
          <label className="font-semibold text-xl">Blog Title:</label>
          <input
            className="w-full inline-block bg-bgPrimary focus:outline-none px-y py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Write here..."
            required
          />
        </div>

        {/* blog details */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* left side */}
          <div className="border p-5 w-2/3">Left side</div>

          {/* right side */}
          <div className="border p-5 w-1/3 space-y-5">Right side</div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
