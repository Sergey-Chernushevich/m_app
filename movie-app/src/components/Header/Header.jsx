import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Link to={"/"}>Movie APP</Link>
      </div>
    </header>
  );
}

export default Header;
