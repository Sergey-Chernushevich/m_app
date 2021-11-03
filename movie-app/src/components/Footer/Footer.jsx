import React from "react";
import styles from "./Footer.module.scss";
import indbIcon from "../../assets/icons/imdb_logo_icon.svg";

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
          , <b>!!!!ICON</b> Using React JS & Redux JS integrated with external
          module data API{" "}
          <a
            href="http://www.omdbapi.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={indbIcon} alt="" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
