import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <SearchForm />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
