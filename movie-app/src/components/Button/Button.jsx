import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  const { title } = props;
  return <button className={styles.btn}>{title}</button>;
}

export default Button;
