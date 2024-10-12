import React from "react";
import { formateDate } from "./../../utility/formateDate";
import editorJs from "editorjs-html";

const editorJsHtml = editorJs();

const SingleBlogCard = ({ blog }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = blog || {};

  const htmlContent = editorJsHtml.parse(content).join(" ");

  return (
    <>
      <div className="bg-white p-8 ">
        {/* Blog header */}
        <div>
          <h1 className="md:text-3xl text-3xl font-medium">{title}</h1>
          <p className="text-sm mb-3">
            {formateDate(createdAt)} by{" "}
            <span className="text-blue-400 cursor-pointer">Nur Mohammad</span>
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={coverImg}
            alt="coverImage"
            className="w-full bg-cover mb-4"
          />
        </div>

        {/* Blog details */}
        <div className="space-y-4">
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="space-y-3 editorjsdiv"
          />
          <div>
            <span className="text-md font-medium">
              Rating: <span>{rating} (based on 1,935 reviews )</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogCard;
