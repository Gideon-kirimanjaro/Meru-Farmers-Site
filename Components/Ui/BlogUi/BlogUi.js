import Image from "next/image";
import React from "react";
import { StyledButton } from "../StyledButton";
import styles from "./BlogUi.module.css";
const BlogUi = ({ heading, src, tag, time, excerpt, date, tagColor }) => {
  return (
    <div
      class="container"
      id={styles.mainDiv}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          border: `1px solid ${tagColor}`,
          borderRadius: "10px 5px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "250px",
            position: "relative",
          }}
        >
          <Image loader={() => src} src={src} alt="blog image" fill />
        </div>
        <div className="mx-2">
          <div className="d-flex mt-2 ">
            <p className="me-2 " style={{ color: `${tagColor}` }}>
              {tag}
            </p>
            <p>{date}</p>
          </div>
          <div className="card-body">
            <h2 className="card-title" style={{ fontWeight: "bold" }}>
              {heading}
            </h2>
            <p className="card-text">{excerpt}...</p>
            <StyledButton>Read More</StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUi;
