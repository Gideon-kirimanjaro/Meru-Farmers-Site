import React from "react";
import Contact from "../Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const contact = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Contact />
    </div>
  );
};

export default contact;
