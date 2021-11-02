/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovie } from "../../actions/dataActions";
import { withRouter } from "react-router-dom";
import styles from "./MovieDetails.module.scss";
import searchActions from "../../actions/searchActions";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  const { setLoading, movie } = props;
  const movieId = props.match.params.id;
  console.log(props);
  console.log(movieId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie(movieId));
    setLoading();
  }, []);

  return (
    <React.Fragment>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.posterWrapper}>
          <img src={movie.Poster} alt="poster" />
        </div>
        <div className={styles.movieDetails}>
          <h2 className={styles.title}>{movie.Title}</h2>
          <ul>
            <li>{movie.Year}</li>
            <li>{movie.Released}</li>
            <li>{movie.Runtime}</li>
            <li>{movie.Genre}</li>
            <li>{movie.Director}</li>
            <li>{movie.Writer}</li>
            <li>{movie.Actors}</li>
            <li>{movie.Plot}</li>
            <li>{movie.Country}</li>
            <li>{movie.Awards}</li>
            <li>{movie.Metascore}</li>
            <li>{movie.imdbRating}</li>
          </ul>
          <a
            href={"https://www.imdb.com/title/" + movie.imdbID}
            target="_blank"
            rel="noopered noreferrer"
            className={styles.about}
          >
            About
          </a>
          <Link to="/">Back to search</Link>
        </div>
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
