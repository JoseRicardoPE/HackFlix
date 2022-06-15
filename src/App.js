import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import styles from "./components/MainContainer.module.css";
import useQuery from "./hooks/useQuery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const query = useQuery();
  const search = query.get("search"); //nos traemos el parámetro de busqueda "search"
  //console.log(search); //Cuando me llegue un parámetro de busqueda en la query se ejecutará el useEffect, pero en vez de buscar en todas las películas busca una en específico.
  // Cuando los componentes guardan un estado y es difícil volverlos al estado inicial, al cambiar la key hago que los componentes se reseteen a cero (Movies)

  return (
    <>
      <Header />
      <main className={styles.main__container}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Movies key={search} search={search} />}
          />
          <Route exact path="/pelicula/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
