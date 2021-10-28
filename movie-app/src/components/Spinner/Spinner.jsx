import React from "react";
import styles from "./Spinner.module.scss";
import spinner from "../../assets/loader/spiner.gif";
function Spinner() {
  return (
    <div className={styles.spinnerWrapper}>
      <img src={spinner} alt="loading" className={styles.spinner} />
    </div>
  );
}

export default Spinner;
