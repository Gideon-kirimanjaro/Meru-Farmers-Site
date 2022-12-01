import React from "react";
import Navigation from "../Navigation/Navigation";
import CustomCard from "../Ui/CustomCard/CustomCard";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import TextImage from "../Ui/TextImage/TextImage";
import {
  faHeader,
  faInfo,
  faPeopleCarryBox,
  faPeopleGroup,
  faPeopleRoof,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import BlogArticle from "../BlogArticle/BlogArticle";
import BreadCrumbCustom from "../Ui/BreadCrumb/BreadCrumbCustom";
import CustomTabs from "../Ui/CustomTabs/CustomTabs";
const About = ({ blogs }) => {
  const title = "About us";
  const body = "We pride ourselves in producing the best quality Macadamia";
  const content = [
    {
      id: 1,
      body: "Lorem ipsum dolor   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "/images/kids.jpg",
      style: "d-md-flex flex-row  justify-content-center px-4",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor  trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "/images/child.jpg",
      style: "d-md-flex flex-row-reverse justify-content-center px-4",
    },
  ];
  const cardData = [
    {
      id: 1,
      title: "Respectfully Assured",
      body: "We are highly talented individuals who believe in our talents and are confident in our success",
      icon: faPeopleGroup,
    },
    {
      id: 2,
      title: "Customer Gratification",
      body: "We strive to win our consumers' trust. We observe, engage, and learn about their needs before fulfilling them",
      icon: faPeopleCarryBox,
    },
    {
      id: 3,
      title: "Respect And Integrity",
      body: "We cherish each individual's potential and human dignity. We conduct our operations in line with the highest professional and ethical standards ",
      icon: faPeopleRoof,
    },
  ];
  const color = "#f18f01";
  return (
    <div>
      <Navigation color={color} />
      <BreadCrumbCustom title={title} link="about" />
      <div className="">
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
      {/* <TextImage content={content} height={300} width={300} /> */}
      <CustomTabs color={color} />
      <HeaderComponent
        textColor="blue"
        title="Our Vision"
        body="To be East Africa’s leading processor and supplier of quality macadamia nuts."
      />
      <HeaderComponent
        textColor="blue"
        title="Our Mision"
        body="To supply quality macadamia nuts while commercially boosting the local community, encouraging environmental protection via renewable energy sources, and serving the needs of both local and international markets.
        "
      />
      <HeaderComponent title={"Our Values"} textColor="blue" />
      <CustomCard cardData={cardData} bgColor={color} />
      <BlogArticle color={color} blogs={blogs} />
      <Footer color={color} />
    </div>
  );
};

export default About;
