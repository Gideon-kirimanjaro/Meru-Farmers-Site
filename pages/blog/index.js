import React, { useState } from "react";
import Blog from "../../Components/Blogs/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Spinner from "../../Components/Ui/Spinner/Spinner";
import { useRouter } from "next/router";
import Footer from "../../Components/Footer/Footer";
//------------------------------------------------------------------API------
const CONTENT_API_KEY = "15ba85399bb4588e4ddc2b8e1a";
const GHOST_URL = "https://gideon-kamau.ghost.io";

const index = ({ blogs }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <Blog blogs={blogs} />

      <Footer />
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
