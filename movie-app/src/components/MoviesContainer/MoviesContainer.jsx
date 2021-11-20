import React from "react";
import styles from "./MoviesContainer.module.scss";
import { connect } from "react-redux";
import MovieCard from "../MovieCard";
import Error from "../Error";
import searchActions from "../../actions/searchActions";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

function MoviesContainer(props) {
  const {
    movies,
    response,
    currentPage,
    totalCount,
    setCurrentPage,
    setLoading,
  } = props;

  let content = "";
  content =
    response === "True" ? (
      movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
    ) : (
      <Error />
    );

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    setLoading();
  };

  const useStyles = makeStyles({
    root: {
      background: "transparent",
      border: 0,
      color: "white",
      margin: "0 auto",
      width: "100$",
      justify: "center",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
        fontSize: "18px",
        alignItems: "center",
        justify: "center",
        margin: "0",
        width: "100%",
        "&:hover": {
          background: "rgba(255,255,255, 0.2)",
        },
        "@media (max-width: 405px)": {
          fontSize: "15px",
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={styles.moviesContainerWrapper}>
      <div className={styles.moviesContainer}>
        {content}
        <div className={styles.pages}>
          <Pagination
            color="secondary"
            className={`${classes.root} ${classes.ul}`}
            count={Math.ceil(totalCount / 10)}
            showFirstButton
            showLastButton
            page={currentPage}
            onChange={(_, page) => {
              if (page !== currentPage) handleSetCurrentPage(page);
            }}
          />
        </div>
      </div>
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
