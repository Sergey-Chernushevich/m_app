import React from "react";
import styles from "./MoviesContainer.module.scss";
import { connect } from "react-redux";
import MovieCard from "../MovieCard";
import Error from "../Error";
import searchActions from "../../actions/searchActions";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

function MoviesContainer(props) {
  const { movies, response, currentPage, totalCount, setCurrentPage } = props;

  let content = "";
  content =
    response === "True" ? (
      movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
    ) : (
      <Error />
    );

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });
  return (
    <div className={styles.moviesContainer}>
      {content}
      <ThemeProvider theme={theme}>
        <Paper>
          <Pagination
            count={Math.ceil(totalCount / 10)}
            showFirstButton
            showLastButton
            page={currentPage}
            sx={{ width: 1 }}
            onChange={(_, page) => handleSetCurrentPage(page)}
          />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movies: state.movies.movies.Search,
  response: state.movies.movies.Response,
  currentPage: state.movies.currentPage,
  totalCount: state.movies.totalCount,
});
export default connect(mapStateToProps, { ...searchActions })(MoviesContainer);
