import React from "react";
import Contact from "../Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
const contact = () => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <Contact />
    </div>
  );
};

export default contact;
