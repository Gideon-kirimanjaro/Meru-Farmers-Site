import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.spinnerDiv}>
      <FontAwesomeIcon className={styles.spinner} icon={faSpinner} />
    </div>
  );
};

export default Spinner;
