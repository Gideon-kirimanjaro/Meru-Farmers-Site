import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { StyledButton } from "../../Components/Ui/StyledButton";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "../../Components/Ui/Spinner/Spinner";
import Navigation from "../../Components/Navigation/Navigation";
import HeaderComponent from "../../Components/Ui/HeaderComponent/HeaderComponent";
import Footer from "../../Components/Footer/Footer";
import styles from "./../../styles/Home.module.css";
// const { GHOST_URL, CONTENT_API_KEY } = process.env;
const CONTENT_API_KEY = "15ba85399bb4588e4ddc2b8e1a";
const GHOST_URL = "https://gideon-kamau.ghost.io";

const blogArticle = ({ blog }) => {
  const [showContent, setShowContent] = useState(true);
  const router = useRouter();
  if (router.isFallback) {
    return <Spinner />;
  }
  const color = "#18988B";

  const handleComments = function (slug) {
    setShowContent(false);
    if (typeof window !== "undefined") {
      let disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = slug;
      };

      // const script = document.createElement("script");
      // script.src = "https://maca-web.disqus.com/embed.js";
      // script.setAttribute("data-timestamp", Date.now().toString());
      let d = document,
        s = d.createElement("script");
      s.src = "https://maca-web.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <Navigation color={color} />

      {blog &&
        blog.map((item) => {
          return (
            <div className="px-4  " style={{ paddingTop: "60px" }}>
              <StyledButton>
                <Link href="/blog">Back </Link>
              </StyledButton>
              {/* <HeaderComponent cl title={item.title} textColor={color} /> */}
              <h1
                className="d-flex justify-content-center"
                style={{ color: color, fontSize: "3.5rem", margin: "50px" }}
              >
                {item.title}
              </h1>
              <h1
                className="d-flex justify-content-center"
                style={{ color: "black", fontSize: "1.5rem" }}
              >
                ~~
                {item.reading_time} Min Read
              </h1>
              <div className={styles.mainDiv}>
                <div
                  dangerouslySetInnerHTML={{ __html: item.html }}
                  style={{ fontSize: "1.4rem" }}
                ></div>
              </div>{" "}
              {showContent ? (
                <StyledButton
                  color="green"
                  onClick={() => {
                    handleComments(item.slug);
                  }}
                >
                  Load Comments
                </StyledButton>
              ) : (
                <div className="px-5 mx-5" id="disqus_thread"></div>
              )}
            </div>
          );
        })}
      <div></div>

      <Footer color={color} />
    </div>
  );
};
const getData = async (slug) => {
  const res = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=tags,authors,slug`
  ).then((res) => res.json());

  return res.posts;
};

export async function getStaticProps({ params }) {
  const blog = await getData(params.id);

  return {
    props: {
      blog: blog,
    },
    revalidate: 600, // revalidate every hour
  };
}
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default blogArticle;
