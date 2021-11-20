// import "./App.css";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import store from "./store/store";
import Main from "./components/Main/Main";
import styles from "./App.module.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.appWrapper}>
          <div className={styles.appContent}>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/movie/:id" exact component={MovieDetails} />
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
