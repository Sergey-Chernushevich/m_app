// import "./App.css";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import store from "./store/store";
import Main from "./components/Main/Main";
import styles from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appWrapper}>
        <div className={styles.appContent}>
          <Navbar />
          <SearchForm />
          <Main className={styles.main} />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
