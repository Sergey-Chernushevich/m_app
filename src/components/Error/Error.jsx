import React from "react";
import { connect } from "react-redux";
import styles from "./Error.module.scss";
import cameraImg from "../../assets/img/error-img.png";

function Error(props) {
  const { errorText } = props;
  return (
    <div className={styles.errorWrapper}>
      <h3>{errorText}</h3>
      <div className={styles.imgWrapper}>
        <img src={cameraImg} alt="" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errorText: state.movies.movies.Error,
});

export default connect(mapStateToProps)(Error);
