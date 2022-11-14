import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = ({ color }) => {
  const socials = [
    {
      id: 1,
      icon: faFacebookF,
      href: "/",
    },
    {
      id: 2,
      icon: faInstagram,
      href: "/",
    },
    {
      id: 3,
      icon: faTwitter,
      href: "/",
    },
  ];
  return (
    <div
      className="d-flex justify-content-center pt-3 pb-3"
      style={{ fontFamily: "montserrat" }}
    >
      <div>
        <div className="d-flex justify-content-center ">
          {socials.map((item) => {
            return (
              <Link
                href={item.href}
                className="d-flex  justify-content-center p-2"
                key={item.id}
              >
                <FontAwesomeIcon
                  key={item.id}
                  icon={item.icon}
                  className=" d-flex flex-row p-2"
                  style={{
                    height: "40px",
                    width: "40px",
                    color: color,
                    border: `2px solid ${color}`,
                    borderRadius: "50%",
                  }}
                />
              </Link>
            );
          })}
        </div>
        <h5 className="d-flex justify-content-center">All rights reserved</h5>
        <h5>
          Developed by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gideonkirimanjaro/"
            style={{
              textDecoration: "none",
              color: color,
            }}
          >
            Kai Creatives
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
