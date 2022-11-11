import React from "react";
import BlogArticle from "../BlogArticle/BlogArticle";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import Details from "./Details/Details";

const Contact = () => {
  const title = "Contact us";
  const body = "We pride ourselves in producing the best quality Macadamia";
  const color = "royalblue";
  return (
    <div>
      <Navigation color={color} />
      <div className="pt-5">
        <HeaderComponent title={title} body={body} textColor={color} />
        <Details color={color} />
        <BlogArticle color={color} />
        <Footer color={color} />
      </div>
    </div>
  );
};

export default Contact;
