import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SottoNav from "./components/SottoNav";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";
import MyHero from "./components/MyHero";
import MySetting from "./components/MySetting";
function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <SottoNav />

      <main>
        <MyGallery nomefilm="Harry Potter" />
        <MyGallery nomefilm="Star Wars" />
        {/* monto i components 4 volte sul component app e passo la prop sia per l'endpoint sia per il titolo */}
        <MyGallery nomefilm="Batman" />
        <MyGallery nomefilm="Spiderman" />
      </main>
      {/* <MySetting /> */}
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
