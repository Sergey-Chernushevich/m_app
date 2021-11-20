import React from "react";
import styles from "./Footer.module.scss";
import react_logo from "../../assets/icons/logo192.png";

function Footer() {
  return (
    <footer>
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
          ,
          <img src={react_logo} alt="" />
          Using React JS & Redux JS integrated with external module data API{" "}
          <a
            href="http://www.omdbapi.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            OMDB
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
