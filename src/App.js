import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Main from "./screens/Main/Main";
// import Footer from "./components/Footer";
import Movie from "./screens/Movie/Movie";
import Favorite from "./screens/Favorite/Favorite";

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route exact path="/home" element={<Main />} />

        <Route exact path="/home/movie/:id" element={<Movie />} />

        <Route exact path="/home/favorite" element={<Favorite />} />

      </Routes>
    </Router>
  );
}

export default App;
