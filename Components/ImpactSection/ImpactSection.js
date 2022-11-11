import React from "react";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import TextImage from "../Ui/TextImage/TextImage";

const ImpactSection = () => {
  const title = "Our Impact";
  const body =
    "We have satisfied the UN's sustainable development goals of zero hunger";
  const content = [
    {
      id: 1,
      body: "Lorem ipsum dolor   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "/images/kids.jpg",
      style: "d-md-flex flex-row-reverse  justify-content-center",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor  trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      src: "/images/child.jpg",
      style: "d-md-flex flex-row justify-content-center",
    },
  ];
  return (
    <div>
      <HeaderComponent title={title} body={body} textColor={"#DB7093"} />
      <TextImage content={content} height={400} width={400} />
    </div>
  );
};

export default ImpactSection;
