import Image from "next/image";
import React from "react";
import Styles from "./TextImage.module.css";
const TextImage = ({ content, height, width }) => {
  return (
    <div>
      {content &&
        content.map((item, index) => {
          return (
            <div className={item.style} id={Styles.mainDiv} key={index}>
              <div id={Styles.textDiv}>
                <h5 className="d-flex justify-content-center">{item.title}</h5>
                <p>{item.body}</p>
              </div>

              <Image
                src={item.src}
                height={height}
                width={width}
                alt="an image"
                className="d-flex justify-content-center "
                id={Styles.img}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TextImage;
