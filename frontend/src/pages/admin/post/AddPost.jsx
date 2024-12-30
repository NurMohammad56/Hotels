import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [coverImg, SetcoverImg] = useState("");
  const [metaDes, SetmetaDes] = useState("");
  const [category, Setcategory] = useState("");
  const [rating, Setrating] = useState(0);
  const [message, Setmessage] = useState("");

  const { user } = useSelector((state) => state.auth);
  return (
    <div className="bg-white md:p-3 p-2">
      <h2 className="text-2xl font-semibold">Create A New Blog Post</h2>
      <form className="space-y-5 pt-6">
        <div className="space-y-3">
          <label className="font-semibold text-xl">Blog Title:</label>
          <input
            className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-2"
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
          <div className="border p-4 w-2/3">Left side</div>

          {/* right side */}
          <div className="border p-4 w-1/3 space-y-5">
            <p className="text-lg font-semibold">Choose Blog Format</p>

            {/* images */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Blog Cover:</label>
              <input
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                value={coverImg}
                onChange={(e) => SetcoverImg(e.target.value)}
                type="text"
                placeholder="https://unsplash.com/image/cover-photo-blog1.png..."
                required
              />
            </div>

            {/* category */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Category:</label>
              <input
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                value={category}
                onChange={(e) => Setcategory(e.target.value)}
                type="text"
                placeholder="Hotels/Travel/Adventure"
                required
              />
            </div>

            {/* meta description */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Meta Description:</label>
              <textarea
                cols={4}
                rows={4}
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                value={metaDes}
                onChange={(e) => SetmetaDes(e.target.value)}
                type="text"
                placeholder="Write your meta description"
                required
              />
            </div>

            {/* rating */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Rating:</label>
              <input
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                value={rating}
                onChange={(e) => Setrating(e.target.value)}
                type="number"
                required
              />
            </div>

            {/* rating */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Author:</label>
              <input
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                value={user.username}
                type="text"
                placeholder={`{user.username} (not editable)`}
                disabled
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
