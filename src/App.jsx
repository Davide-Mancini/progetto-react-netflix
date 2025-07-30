import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SottoNav from "./components/SottoNav";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";
import MyHero from "./components/MyHero";
import MySetting from "./components/MySetting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>
      <SottoNav />

      <main>
        <Routes>
          <Route path="/tvshows" element={<TVShows />} />
          <Route
            path="/"
            element={
              <>
                <MyGallery nomefilm="Harry Potter" />
                <MyGallery nomefilm="Star Wars" />
                <MyGallery nomefilm="Batman" />
                <MyGallery nomefilm="Spiderman" />
              </>
            }
          />
          <Route
            path="/movie-details/:movieId"
            element={<MovieDetails nomefilm="Harry Potter" />}
          />
          {/* monto i components 4 volte sul component app e passo la prop sia per l'endpoint sia per il titolo */}
        </Routes>
      </main>

      {/* <MySetting /> */}
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
