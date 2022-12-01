import React from "react";
import HeaderComponent from "../Ui/HeaderComponent/HeaderComponent";
import TextImage from "../Ui/TextImage/TextImage";

const ImpactSection = () => {
  const title = "Why Macadamia?";
  const body =
    "Macadamia nuts are high in healthy fats and may help those trying to lose weight. One serving of macadamia nuts also contains dietary fiber, protein, manganese, thiamin, and a good amount of copper.";
  const content = [
    {
      id: 1,
      title: "Improves Skin Elasticity and Appearance",
      body: "Macadamia nuts include omega-7 fatty acids, sea buckthorn oil, and avocado oil, which may benefit skin, nail, and hair health. They protect against oxidative damage, which is one of the main reasons why skin ages, by encouraging the growth of new skin cells.",
      src: "/images/benefit1.jpg",
      style: "d-md-flex flex-row-reverse  justify-content-center",
    },
    {
      id: 2,
      title: "Macadamia Is a Superfood",
      body: "Macadamia nuts are a nutritional powerhouse with benefits like better brain and heart health, weight loss, and reduced inflammation. These nuts also have moderate fiber content and are low in carbohydrates and sugar, making them less likely to cause insulin spikes, which may be advantageous for people with diabetes.",
      src: "/images/benefit2.jpg",
      style: "d-md-flex flex-row justify-content-center",
    },
    {
      id: 3,
      title: "Improves Gut Health",
      body: "The fibre in macadamia nuts can help with digestion and overall gut health. The soluble fibre in these nuts can act as a prebiotic, which means it feeds your beneficial gut bacteria. These beneficial bacteria produce short-chain fatty acids (SCFAs) like acetate, butyrate, and propionate that reduce inflammation and safeguard against diseases like IBS and ulcerative colitis.",
      src: "/images/benefit3.jpg",
      style: "d-md-flex flex-row-reverse  justify-content-center",
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      <HeaderComponent title={title} body={body} textColor={"#DB7093"} />
      <TextImage content={content} height={300} width={300} />
    </div>
  );
};

export default ImpactSection;
