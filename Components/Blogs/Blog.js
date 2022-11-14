import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import Styles from "./Blog.module.css";
import Image from "next/image";
import { StyledButton } from "../../Components/Ui/StyledButton";
import Link from "next/link";
import BlogUi from "../../Components/Ui/BlogUi/BlogUi";
const Blog = ({ blogs }) => {
  const color = "purple";
  const title = "Blog";
  const body =
    "Read our latest blogs ranging from agriculture to humanitarian work";
  ///------------------------------NAME
  const blogTags = blogs.map((item) => {
    return item;
  });
  const [] = blogTags;
  ///------------------------------color
  const tagName = (blogDetails) => {
    const { tags } = blogDetails;
    if (tags.length === 0) {
      return "blog";
    } else {
      return tags[0].name;
    }
  };
  const tagColor = (blogDetails) => {
    const { tags } = blogDetails;
    if (tags.length === 0) {
      return "pink";
    } else {
      return tags[0].accent_color;
    }
  };

  const date = (d) => {
    const newDate = new Date(d);
    const year = newDate.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[newDate.getMonth()];
    const day = newDate.getDate();
    return { day, month, year };
  };
  return (
    <div>
      <Navigation color={color} />
      <div className="pt-5">
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
      <div style={{}}>
        <div>
          {blogs &&
            blogs.map((item, index) => {
              const { title } = item;
              const blogTag = tagName(item);
              const blogColor = tagColor(item);
              // const { name } = item.tags[0];
              const { reading_time } = item;
              const { feature_image } = item;
              // const { accent_color } = item.tags[0];
              const creationDate = date(item.created_at);
              const { day } = creationDate;
              const { month } = creationDate;
              const { year } = creationDate;

              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    margin: "20px",
                  }}
                  key={index}
                  href="/blog/[id]"
                  as={`/blog/${item.slug}`}
                >
                  <BlogUi
                    heading={title}
                    tag={blogTag}
                    time={reading_time}
                    date={`${day}th ${month} ${year}`}
                    tagColor={blogColor}
                    src={
                      feature_image === null
                        ? "/images/kids.jpg"
                        : feature_image
                    }
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
