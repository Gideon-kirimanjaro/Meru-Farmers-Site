import React from "react";
import Styles from "./CallToAction.module.css";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { StyledButton } from "../Ui/StyledButton";
const CallToAction = ({ color }) => {
  return (
    <div id={Styles.mainDiv} className="d-md-flex ">
      <div className={Styles.leftDiv}>
        <p className="d-flex justify-content-center">
          We pride ourselves in solving food insecurity through the growth of
        </p>{" "}
        <div className="d-flex justify-content-center">
          {" "}
          <StyledButton primary color={color}>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Learn More
            </Link>
          </StyledButton>
        </div>
      </div>{" "}
      <div className={Styles.rightDiv}>
        <Image
          src="/images/maca.jpg"
          height={250}
          width={300}
          priority
          alt="image"
        />
      </div>
    </div>
  );
};

export default CallToAction;
