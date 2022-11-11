import "../styles/globals.css";
import Head from "next/head";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../services/components/Feature/Feature";

import Teaser from "../services/components/Teaser/Teaser";
import Page from "../services/components/Page/Page";
import Grid from "../services/components/Grid/Grid";
// import Feature from "../components/Feature";
// import Grid from "../components/Grid";
// import Page from "../components/Page";
// import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "YfQHU3clCUp5AqHkgVL2XAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>{" "}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
