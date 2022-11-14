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
              <div className="d-md-flex " id={Styles.textDiv}>
                <p>{item.body}</p>
              </div>
              <div
                className="d-flex justify-content-center "
                id={Styles.imgDiv}
              >
                <Image
                  src={item.src}
                  height={height}
                  width={width}
                  alt="an image"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TextImage;
