import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import posterPlaceHolder from "../../assets/img/no_poster.jpg";

function MovieCard(props) {
  const { movie } = props;
  let poster;
  movie.Poster === "N/A"
    ? (poster = posterPlaceHolder)
    : (poster = movie.Poster);
  return (
    <div className={styles.movieCard}>
      <Link to={"/movie/" + movie.imdbID}>
        <div className={styles.posterWrapper}>
          <img src={poster} alt="" />
        </div>
        <div className={styles.movieDetailsWrapper}>
          <div className={styles.movieDetails}>
            <div className={styles.movieTitle}>{movie.Title}</div>
            <div className={styles.movieYear}>{movie.Year}</div>
          </div>
          <img src={poster} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
