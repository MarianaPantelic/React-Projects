import React from "react";
import FirstBlog from "./firstBlog";
import SecondBlog from "./secondBlog";

const MainBlog = () => {
  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          <div className="single-blog-post"></div>
          <FirstBlog />
          <a className="btn btn-primary" href="#">
            Read More
          </a>
          <SecondBlog />
        </div>
      </div>
    </>
  );
};

export default MainBlog;
