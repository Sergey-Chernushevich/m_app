import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div className={styles.movieCard}>
      <div className={styles.posterWrapper}>
        <img src={movie.Poster} alt="" />
      </div>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.movieDetails}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <div>Movie Dedails</div>
        </div>
        <img src={movie.Poster} alt="" />
      </div>
    </div>
  );
}

export default MovieCard;
