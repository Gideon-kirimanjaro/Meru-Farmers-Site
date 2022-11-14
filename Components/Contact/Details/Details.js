import React from "react";
import Styles from "./Details.module.css";
const Details = ({ color }) => {
  const data = [
    { id: 1, title: "Call/whatsapp", details: "0707000574 ", color: "green" },
    {
      id: 2,
      title: "Email",
      details: "info@maca.com",
      color: "palevioletred",
    },
    {
      id: 3,
      title: "Location",
      details: "Meru",
      color: "palevioletred",
    },
  ];

  return (
    <div
      id={Styles.mainDiv}
      className="d-flex justify-content-center mt-5"
      style={{ width: "500px", margin: "auto" }}
    >
      <div className=" ">
        {data.map((item, index) => {
          return (
            <div
              className="d-flex"
              id={Styles.info}
              style={{ width: "200px" }}
              key={index}
            >
              <h5 className="" style={{ color: color, width: "200px" }}>
                {item.title}:
              </h5>
              <div className="d-flex justify-content-center">
                {" "}
                <p
                  className="ps-3"
                  style={{
                    width: "200px",
                    fontSize: "1.3rem",
                    marginLeft: item.padding,
                  }}
                >
                  {item.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
