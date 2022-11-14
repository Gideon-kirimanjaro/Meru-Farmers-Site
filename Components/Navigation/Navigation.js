import React, { useState } from "react";
import Link from "next/link";
import Styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faBank,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../Ui/StyledButton";
const Navigation = ({ color }) => {
  const [state, setState] = useState(false);
  const links = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "/about",
      title: "About",
    },
    {
      id: 3,
      href: "/blog",
      title: "Blog",
    },
    {
      id: 4,
      href: "/contact",
      title: "Contact",
    },
  ];
  const handleClose = () => {
    setState(!state);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.mainDiv}>
        <div>
          {" "}
          <Link href="/" style={{ color: color }}>
            <FontAwesomeIcon id={Styles.logo} icon={faBank}></FontAwesomeIcon>
          </Link>
        </div>
        <div
          className={Styles.navLinks}
          id={state ? null : Styles.navLinksInactive}
        >
          <ul>
            {links.map((item, i) => {
              return (
                <li key={item.id}>
                  <Link style={{ color: color }} href={item.href}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={Styles.iconsDiv} style={{ color: color }}>
          <FontAwesomeIcon
            id={Styles.closeIcon}
            icon={state ? faClose : faBars}
            onClick={handleClose}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
