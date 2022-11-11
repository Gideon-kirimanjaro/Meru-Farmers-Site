import React from "react";
import Navigation from "../Navigation/Navigation";
import CustomCard from "../Ui/CustomCard/CustomCard";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import TextImage from "../Ui/TextImage/TextImage";
import {
  faHatCowboy,
  faPlateWheat,
  faHeader,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

const About = () => {
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
      title: "Integrity",
      body: "Fresh Macadamia homegrown and harvested",
      icon: faInfo,
    },
    {
      id: 2,
      title: "Honesty",
      body: "One of the best locally grown Macadamia with quality taste",
      icon: faHeader,
    },
    {
      id: 3,
      title: "Innovative",
      body: "Macadamia serves your nutritional values ",
      icon: faInfo,
    },
  ];
  const color = "#f18f01";
  return (
    <div>
      <Navigation color={color} />
      <div className="pt-5">
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
      <TextImage content={content} height={300} width={300} />
      <HeaderComponent title={"Our values"} textColor={color} />
      <CustomCard cardData={cardData} bgColor={color} />
      <Footer color={color} />
    </div>
  );
};

export default About;
