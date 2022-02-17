import React from "react";
import "./post.css";
import { BlogData } from "../../data/BlogData";
import { Link } from "react-router-dom";
function Post(props) {
  let blogss = BlogData();
  let n = props.val;
  let blogs = [];
  if (n === "i") {
    blogs = blogss;
  } else {
    for (let i = 0; i < n; i++) {
      blogs.push(blogss[i]);
    }
  }
  return (
    <>
      <div className="home-blog" style={{ margin: "2vw 6vw" }}>
        <div className="heading">Blogs</div>
        <div className="posts">
          {blogs.map((blog) => {
            return (
              <div className="post">
                <div className="image">
                  <img src={blog.img} alt="" />
                </div>
                <div className="post-title">{blog.title}</div>
                <div className="post-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, sit nemo ducimus quisquam ex consequuntur et
                  aliquam esse necessitatibus culpa?
                </div>
              </div>
            );
          })}
        </div>
        <div className="button">
          <Link to="/blog">more...</Link>
          {/* <a href="/">more...</a> */}
        </div>
      </div>
    </>
  );
}

export default Post;
