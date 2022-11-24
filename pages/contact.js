import React from "react";
import Contact from "../Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
const GHOST_URL = process.env.GHOST_URL;
const contact = ({ blogs }) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <Contact blogs={blogs} />
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
export default contact;
