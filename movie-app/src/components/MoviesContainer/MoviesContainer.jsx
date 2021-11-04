import React from "react";
import styles from "./MoviesContainer.module.scss";
import { connect } from "react-redux";
import MovieCard from "../MovieCard";
import Error from "../Error";

function MoviesContainer(props) {
  const { movies, response } = props;
  let content = "";
  content =
    response === "True" ? (
      movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
    ) : (
      <Error />
    );
  return <div className={styles.moviesContainer}>{content}</div>;
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies.Search,
  response: state.movies.movies.Response,
});
export default connect(mapStateToProps)(MoviesContainer);
