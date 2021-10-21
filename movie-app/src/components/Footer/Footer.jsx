import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <p>
        Developed by{" "}
        <a href="https://github.com/Sergey-Chernushevich">
          Sergey Chernushevich
        </a>
        , <b>!!!!ICON</b> Using React JS & Redux JS integrated with external
        module data API <a href="http://www.omdbapi.com/">OMDB</a>
      </p>
    </div>
  );
}

export default Footer;
