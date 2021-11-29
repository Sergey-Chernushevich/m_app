/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./MovieDetails.module.scss";
import searchActions from "../../actions/searchActions";
import { getMovie } from "../../actions/dataActions";
import posterPlaceHolder from "../../assets/img/no_poster.jpg";

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
  let poster;
  movie.Poster === "N/A"
    ? (poster = posterPlaceHolder)
    : (poster = movie.Poster);
  return (
    <React.Fragment>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.poster}>
          <img src={poster} alt="poster" />
        </div>
        <div className={styles.movieDetails}>
          <h2 className={styles.title}>{movie.Title}</h2>
          <ul>
            <li>
              <span>Year: </span> {movie.Year}
            </li>
            <li>
              <span>Runtime: </span>
              {movie.Runtime}
            </li>
            <li>
              <span>Released: </span>
              {movie.Released}
            </li>
            <li>
              <span>Genre: </span>
              {movie.Genre}
            </li>
            <li>
              <span>Director: </span>
              {movie.Director}
            </li>
            <li>
              <span>Writer: </span>
              {movie.Writer}
            </li>
            <li>
              <span>Actors: </span>
              {movie.Actors}
            </li>
            <li>
              <span>Plot: </span>
              {movie.Plot}
            </li>
            <li>
              <span>Country: </span>
              {movie.Country}
            </li>
            <li>
              <span>Awards: </span>
              {movie.Awards}
            </li>
            <li
              className={
                movie.Metascore >= 80
                  ? styles.scoreGreen
                  : movie.Metascore >= 40
                  ? styles.scoreYellow
                  : styles.scoreRed
              }
            >
              <span>Metascore rating: </span> {movie.Metascore}
            </li>
            <li
              className={
                movie.imdbRating >= 8
                  ? styles.scoreGreen
                  : movie.imdbRating >= 4
                  ? styles.scoreYellow
                  : styles.scoreRed
              }
            >
              <span>IMDB rating: </span> {movie.imdbRating}
            </li>
          </ul>
          <div className={styles.buttons}>
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              rel="noopered noreferrer"
              className={`${styles.btn}`}
            >
              About
            </a>

            <Link to="/">
              <button className={`${styles.btn}`}>Back to search</button>
            </Link>
          </div>
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
  movie: state.movies.movie,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));
