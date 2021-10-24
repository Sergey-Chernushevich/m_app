import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className={styles.movieCard}>
      <div className={styles.posterWrapper}>
        <img src={movie.Poster} alt="" />
      </div>
      <div className={styles.movieDetails}>
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
        <div>Movie Dedails</div>
      </div>
    </div>
  );
}

export default MovieCard;
