import React from "react";
import styles from "./Spinner.module.css";
import spinner from "../../assets/loader/spiner.gif";
function Spinner() {
  return (
    <div>
      <img src={spinner} alt="loading" className={styles.spinner} />
    </div>
  );
}

export default Spinner;
