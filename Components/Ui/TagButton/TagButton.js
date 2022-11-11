import React from "react";
import { Button } from "react-bootstrap";
import styles from "./TagButton.module.css";
const TagButton = ({ tag, btnColor }) => {
  return (
    <div>
      <Button className={styles.btn} style={{ backgroundColor: btnColor }}>
        {tag}
      </Button>
    </div>
  );
};

export default TagButton;
