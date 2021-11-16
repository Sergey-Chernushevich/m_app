/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovie } from "../../actions/dataActions";
import { withRouter } from "react-router-dom";
import styles from "./MovieDetails.module.scss";
import searchActions from "../../actions/searchActions";
import { Link } from "react-router-dom";
import posterPlaceHolder from "../../assets/img/no_poster.jpg";
import Button from "../Button";

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
            <li className={movie.Metascore > 50 ? styles.metascoreGreen : ""}>
              <span>Metascore rating: </span> {movie.Metascore}
            </li>
            <li>
              <span>IMDB rating: </span> {movie.imdbRating}
            </li>
          </ul>
          <div className={styles.buttons}>
            <div>
              <a
                href={"https://www.imdb.com/title/" + movie.imdbID}
                target="_blank"
                rel="noopered noreferrer"
                className={styles.about}
              >
                <Button title="About" />
              </a>
            </div>
            <div>
              <Link to="/">
                <Button title="Back to search" />
              </Link>
            </div>
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
  //   loading: state.movie.loading,
  movie: state.movies.movie,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetails));
