import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <p>
        Developed by <a href="#">Sergey Chernushevich</a>, <b>!!!!ICON</b> Using
        React JS & Redux JS integrated with external module data API{" "}
        <a href="#">OMDB</a>
      </p>
    </div>
  );
}

export default Footer;
