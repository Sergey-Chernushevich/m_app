import React from "react";
import { connect } from "react-redux";
import styles from "./Main.module.scss";
import Spinner from "../Spinner";
import MoviesContainer from "../MoviesContainer";

function Main(props) {
  const { loading } = props;
  return (
    <div className={styles.main}>
      {loading ? <Spinner className={styles.spinner} /> : <MoviesContainer />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Main);
