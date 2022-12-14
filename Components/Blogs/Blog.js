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
    <div className={Styles.mainDiv}>
      <Navigation color={color} />
      <div className="">
        <BreadCrumbCustom title={title} link="blog" />
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>

      <div className="container">
        <div className="row">
          {blogs &&
            blogs.map((item, index) => {
              const { title } = item;
              const excerpt = ctx.trimExcerpt(item.excerpt);
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
                <div
                  className="col-lg-4 col-md-6"
                  key={index}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="/blog/[id]"
                    as={`/blog/${item.slug}`}
                  >
                    <BlogUi
                      heading={title}
                      excerpt={excerpt}
                      tag={blogTag}
                      time={reading_time}
                      date={`${month} ${day}th  ,${year}`}
                      tagColor={blogColor}
                      src={
                        feature_image === null
                          ? "/images/kids.jpg"
                          : feature_image
                      }
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
