import React, { useState } from "react";
import Blog from "../../Components/Blogs/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { StyledButton } from "../../Components/Ui/StyledButton";
import Link from "next/link";
import BlogUi from "../../Components/Ui/BlogUi/BlogUi";
import Spinner from "../../Components/Ui/Spinner/Spinner";
import { useRouter } from "next/router";
//------------------------------------------------------------------API------
const CONTENT_API_KEY = "15ba85399bb4588e4ddc2b8e1a";
const GHOST_URL = "https://gideon-kamau.ghost.io";

const index = ({ blogs }) => {
  const router = useRouter();

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

  console.log(">>blogTags", blogTags);
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
  if (router.isFallback) {
    return <Spinner />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Blog />

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
            <>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                key={item.id}
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
                    feature_image === null ? "/images/kids.jpg" : feature_image
                  }
                />
              </Link>
            </>
          );
        })}
    </div>
  );
};
const getData = async () => {
  const res = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&include=tags,authors,slug`
  ).then((res) => res.json());

  return res.posts;
};

export async function getStaticProps({ params }) {
  const blogs = await getData();
  return {
    props: {
      blogs: blogs,
    },
    revalidate: 600, // revalidate every hour
  };
}
export default index;
