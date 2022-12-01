import Image from "next/image";
import React from "react";
import CustomCard from "../Ui/CustomCard/CustomCard";
import Styles from "./SolutionSection.module.css";
import {
  faHatCowboy,
  faPlateWheat,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
const SolutionSection = ({ color }) => {
  const cardData = [
    {
      id: 1,
      title: "Fresh",
      body: "Fresh Macadamia homegrown and harvested",
      icon: faHatCowboy,
    },
    {
      id: 2,
      title: "Quality",
      body: "One of the best locally grown Macadamia with quality taste",
      icon: faPlateWheat,
    },
    {
      id: 3,
      title: "Nutritious",
      body: "Macadamia serves your nutritional values ",
      icon: faBagShopping,
    },
  ];

  const title = "Our Process";
  const body =
    "We specialize in providing excellent halal-quality macadamia nuts that humans have skillfully hand-processed with love and care. Sun drying, sorting, and packaging are manual methods used to process nuts. Once the nuts have been vacuum packed, they are dosed with nitrogen, sealed, and then cartoned in 25 pounds of food-grade aluminum before being refrigerated to 12–14 degrees Celsius";
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.container}>
        <HeaderComponent title={title} body={body} textColor={color} />
      </div>
      <CustomCard cardData={cardData} bgColor={color} />
    </div>
  );
};

export default SolutionSection;
