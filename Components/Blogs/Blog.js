import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import Styles from "./Blog.module.css";
import Image from "next/image";
import { StyledButton } from "../../Components/Ui/StyledButton";
import Link from "next/link";
import BlogUi from "../../Components/Ui/BlogUi/BlogUi";
import BlogContext from "../../store/blog-data";
import BreadCrumbCustom from "../Ui/BreadCrumb/BreadCrumbCustom";
const Blog = ({ blogs }) => {
  const ctx = useContext(BlogContext);
  const color = "purple";
  const title = "Blog";
  const body =
    "Read our latest blogs ranging from agriculture to humanitarian work";

  return (
    <div>
      <Navigation color={color} />
      <div className="">
        <BreadCrumbCustom title={title} link="blog" />
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
      <div className="px-2">
        <div>
          {blogs &&
            blogs.map((item, index) => {
              const { title } = item;
              const blogTag = ctx.tagName(item);
              const blogColor = ctx.tagColor(item);
              // const { name } = item.tags[0];
              const { reading_time } = item;
              const { feature_image } = item;
              // const { accent_color } = item.tags[0];
              const creationDate = ctx.date(item.created_at);
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
