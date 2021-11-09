import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm";

function Header(props) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Link to={"/"} className={styles.logo}>
          Movie APP
        </Link>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
