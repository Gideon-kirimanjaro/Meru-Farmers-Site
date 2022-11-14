import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import HomeComponent from "../Components/Home/HomeComponent";
import { useContext } from "react";
import BlogContext from "../store/blog-data";
const CONTENT_API_KEY = "15ba85399bb4588e4ddc2b8e1a";
const GHOST_URL = "https://gideon-kamau.ghost.io";
export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <HomeComponent blogs={blogs} />
    </div>
  );
}
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
