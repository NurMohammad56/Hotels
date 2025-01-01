const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentModel");

// Create blog
const createBlog = async (req) => {
  try {
    let newPost = new blogModel({ ...req.body, author: req.userId });
    await newPost.save();
    return { status: "success", data: newPost };
  } catch (error) {
    return { status: "fail", message: "Error creating post !" };
  }
};

// Read blog
const getBlog = async (req) => {
  try {
    const { search, category, location } = req.query;

    let query = {};
    // Search Title, Content
    if (search) {
      query = {
        ...query,
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }

    // Category
    if (category) {
      query = {
        ...query,
        category,
      };
    }

    // Location
    if (location) {
      query = {
        ...query,
        location,
      };
    }

    let getData = await blogModel
      .find(query)
      .populate("author", "email")
      .sort({ createdAt: -1 });
    return getData;
  } catch (error) {
    return { status: "fail", message: "Error getting blog !" };
  }
};

// Get single blog by id
const getSingleBlog = async (req) => {
  try {
    let getID = req.params.id;
    let get = await blogModel.findById(getID);
    if (!get) {
      return { status: "Failed", message: "Blog not found" };
    }
    // specific comment
    let comment = await commentModel
      .find({ postID: getID })
      .populate("user", "username, email");

    return { status: "success", data: get, comment };
  } catch (error) {
    return { status: "fail", message: "Internal error !" };
  }
};

// Update blog
const updateBlog = async (req) => {
  try {
    let getID = req.params.id;
    let updatedBlog = await blogModel.findByIdAndUpdate(
      getID,
      { ...req.body },
      { new: true }
    );
    if (!updatedBlog) {
      return { status: "Failed", message: "Blog not updated" };
    }
    return { status: "Blog updated successfully", data: updatedBlog };
  } catch (error) {
    return { status: "fail", message: "Internal error !" };
  }
};

// Delete blog
const deleteBlog = async (req) => {
  try {
    let postID = req.params.id;
    let deleteBlog = await blogModel.findByIdAndDelete(postID);

    if (!deleteBlog) {
      return { status: "Failed", message: "Blog not deleted" };
    }

    // Deleted comment
    await commentModel.deleteMany({ postID: postID });

    return { message: "Blog deleted successfully", data: deleteBlog };
  } catch (error) {
    return { status: "Error deleting blog", message: "Internal error !" };
  }
};

// Related posts
const relatedBlog = async (req) => {
  try {
    const { id } = req.params;
    if (!id) {
      return { status: "Post id is not required", message: "Failed" };
    }

    const blog = await blogModel.findById(id);

    if (!blog) {
      return { status: "Post is not found", message: "Failed" };
    }

    const titleRegex = new RegExp(blog.title.split(" ").join("|"), "i");

    const relatedQuery = {
      _id: { $ne: id },
      title: { $regex: titleRegex },
    };

    const relatedBlog = await blogModel.find(relatedQuery);

    return relatedBlog;
  } catch (error) {
    return {
      status: "Error fetching related blog",
      message: "Internal error !",
    };
  }
};

module.exports = {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  relatedBlog,
};
