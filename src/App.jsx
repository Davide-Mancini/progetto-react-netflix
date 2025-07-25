import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SottoNav from "./components/SottoNav";
import MyGallery from "./components/MyGallery";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";
import MyHero from "./components/MyHero";
function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <SottoNav />

      <main>
        <MyGallery nomefilm="Star Wars" />
        <MyGallery nomefilm="Spiderman" />
        <MyGallery nomefilm="Batman" />
        <MyGallery nomefilm="Harry Potter" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
