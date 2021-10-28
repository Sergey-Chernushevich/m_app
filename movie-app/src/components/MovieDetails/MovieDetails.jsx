/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovie } from "../../actions/dataActions";
import { withRouter } from "react-router-dom";
import styles from "./MovieDetails.module.scss";
import searchActions from "../../actions/searchActions";

function MovieDetails(props) {
  const { setLoading } = props;
  const movieId = props.match.params.id;
  console.log(props);
  console.log(movieId);

  //const { getMovie } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie(movieId));
    setLoading();
  }, []);

  return (
    <React.Fragment>
      <div className={styles.MovieDetailsWrapper}>
        {movieId}
        <div></div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  getMovie,
  ...searchActions,
};

const mapStateToProps = (state) => ({
  //   loading: state.movie.loading,
  movie: state.movies.movie,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));
