import React from "react";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import Slider from "../Ui/Slider/Slider";
import Styles from "./BlogArticle.module.css";
const BlogArticle = ({ color, blogs }) => {
  // const data = [
  //   {
  //     id: 1,
  //     src: "/images/kids.jpg",
  //     description: "Educational",
  //   },
  //   {
  //     id: 2,
  //     src: "/images/child.jpg",
  //     description: "Insightful",
  //   },

  //   {
  //     id: 3,
  //     src: "/images/child.jpg",
  //     description: "Quality ",
  //   },
  // ];

  return (
    <div className={Styles.mainDiv}>
      <HeaderComponent title={"Articles"} textColor={color} />
      <Slider data={blogs} color={color} />
    </div>
  );
};

export default BlogArticle;
