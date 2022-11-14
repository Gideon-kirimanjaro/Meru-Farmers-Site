import "../styles/globals.css";
import Head from "next/head";
import { ContextProvider } from "../store/blog-data";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>{" "} */}
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

export default MyApp;
