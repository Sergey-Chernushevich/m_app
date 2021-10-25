import React from "react";
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
      <div className={styles.posterWrapper}>
        <img src={poster} alt="" />
      </div>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.movieDetails}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <div>Movie Dedails</div>
        </div>
        <img src={poster} alt="" />
      </div>
    </div>
  );
}

export default MovieCard;
