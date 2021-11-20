import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm";
import cameraImage from "../../assets/img/camera.png";

function Header(props) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Link to={"/"} className={styles.logo}>
          <img src={cameraImage} alt="" />
          Movie App
        </Link>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
