import React from "react";

const HeaderComponent = ({ textColor, title, body }) => {
  return (
    <div className="pt-4">
      <h1
        className="d-flex justify-content-center "
        style={{ color: textColor, fontFamily: "poppins" }}
      >
        {title}
      </h1>
      <p
        className="d-flex justify-content-center px-5"
        style={{ fontSize: "1.3rem", fontFamily: "montserrat" }}
      >
        {body}
      </p>
    </div>
  );
};

export default HeaderComponent;
