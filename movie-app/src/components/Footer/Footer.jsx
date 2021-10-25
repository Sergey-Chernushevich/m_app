import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/Sergey-Chernushevich"
          target="_blank"
          rel="me noreferrer noopener"
        >
          Sergey Chernushevich
        </a>
        , <b>!!!!ICON</b> Using React JS & Redux JS integrated with external
        module data API{" "}
        <a
          href="http://www.omdbapi.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          OMDB
        </a>
      </p>
    </div>
  );
}

export default Footer;
