import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import {
  useFetchBlogbyIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blogs/blogsApi";
import { useNavigate, useParams } from "react-router-dom";

const AddPost = () => {
  const { id } = useParams();
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, SetcoverImg] = useState("");
  const [metaDes, SetmetaDes] = useState("");
  const [category, Setcategory] = useState("");
  const [rating, Setrating] = useState(0);
  const [message, Setmessage] = useState("");
  const [updateBlog] = useUpdateBlogMutation();
  const { data: blog = {}, isLoading, refetch } = useFetchBlogbyIdQuery(id);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (blog.data) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorRef.current = editor;
        },
        autofocus: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
        data: blog.data.content,
      });
      return () => {
        editor.destroy();
        editorRef.current = null;
      };
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const content = await editorRef.current.save();
      const updateData = {
        title: title || blog.data.title,
        coverImg: coverImg || blog.data.coverImg,
        content,
        description: metaDes || blog.data.description,
        author: user?._id,
        rating: rating || blog.data.rating,
      };

      const response = await updateBlog({ id, ...updateData }).unwrap();
      //   console.log(response);
      alert("Blog is updated successfully");
      refetch();
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to update post".error);
      Setmessage("Faild to update post please try again!");
    }
  };

  return (
    <div className="bg-white md:p-3 p-2">
      <h2 className="text-2xl font-semibold">Edit or Manage Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-6">
        <div className="space-y-3">
          <label className="font-semibold text-xl">Blog Title:</label>
          <input
            className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-2"
            defaultValue={blog?.data?.title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Write here..."
            required
          />
        </div>

        {/* blog details */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* left side */}
          <div className="border p-4 w-2/3">
            <p className="font-semibold text-lg mb-4">Content Section</p>
            <p className="text-xs italic">Edit your post bellow here</p>
            <div id="editorjs"></div>
          </div>

          {/* right side */}
          <div className="border p-4 w-1/3 space-y-5">
            <p className="text-lg font-semibold">Edit Blog Format</p>

            {/* images */}
            <div className="space-y-3">
              <label className="font-semibold text-sm">Blog Cover:</label>
              <input
                className="w-full inline-block bg-bgPrimary focus:outline-none px-1 py-1"
                defaultValue={blog?.data?.coverImg}
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
                defaultValue={blog?.data?.category}
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
                defaultValue={blog?.data?.description}
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
                defaultValue={blog?.data?.rating}
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

        {message && <p className="text-red-500">{message}</p>}
        <button
          disabled={isLoading}
          className="w-full mt-4 bg-primary hover:bg-indigo-500 text-white font-medium py-1 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default AddPost;
