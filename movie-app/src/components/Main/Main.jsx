import React from "react";
import styles from "./Main.module.css";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import MoviesContainer from "../MoviesContainer";
function Main(props) {
  const { loading } = props;
  return (
    <div className={styles.main}>
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Main);
