import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import Styles from "./Blog.module.css";
const Blog = () => {
  const color = "purple";
  const title = "Blog";
  const body =
    "Read our latest blogs ranging from agriculture to humanitarian work";
  return (
    <div>
      <Navigation color={color} />
      <div className="pt-5">
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
    </div>
  );
};

export default Blog;
