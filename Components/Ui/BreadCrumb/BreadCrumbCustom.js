import Link from "next/link";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const BreaCrumbCustom = ({ link, title }) => {
  return (
    <div>
      <Breadcrumb className="ps-3 pt-5">
        <Link className="pt-5" href="/">
          Home
        </Link>

        <Breadcrumb.Item className="pt-5" active>
          / {title}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreaCrumbCustom;
