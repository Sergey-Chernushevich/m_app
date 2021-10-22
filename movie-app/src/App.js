import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default App;
