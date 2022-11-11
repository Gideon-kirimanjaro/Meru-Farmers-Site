import React from "react";
import About from "../Components/About/About";
import TextImage from "../Components/Ui/TextImage/TextImage";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const about = () => {
  return (
    <div>
      {" "}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <About />
    </div>
  );
};

export default about;
