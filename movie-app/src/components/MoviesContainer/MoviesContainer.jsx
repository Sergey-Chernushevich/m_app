import React from "react";
import styles from "./MoviesContainer.module.css";
import { connect } from "react-redux";
import MovieCard from "../MovieCard";

function MoviesContainer(props) {
  const { movies } = props;
  let content = "";
  content =
    movies.length > 0
      ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      : null;
  return <div className={styles.moviesContainer}>{content}</div>;
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps)(MoviesContainer);
