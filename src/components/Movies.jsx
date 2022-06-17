import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import HeaderFondo from "./HeaderFondo";
import Filter from "./Filter";
import Movie from "./Movie";
import NotFound from "./NotFound";
import Spinner from "./Spinner";
import styles from "./Movies.module.css";

function Movies({ search }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); //El estado inicial de la página es 1
  const [filterMovies, setFilterMovies] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true); //Estado para averiguar si la página actual es menor al total de páginas de la API

  const API = process.env.REACT_APP_API;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  // Primero se carga el componente y luego se ejecuta el efecto
  useEffect(() => {
    setLoading(true);
    const searchUrlMovie = search
      ? `${API}/search/movie?query=${search}` //Búsqueda específicia. (Trae las películas que coinciden con ese parámetro de busqueda).
      : `${API}/movie/popular?api_key=af29515c6aa30c89141d36fb25af9426&page=${page}`; //Le paso &page al query como otra condición de busqueda, más la página
    async function getMovies() {
      const moviesApi = await axios.get(searchUrlMovie, {
        headers: {
          Authorization:
            `Bearer${API_TOKEN}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      console.log(moviesApi.data.results);
      if (page === 1) {
        setMovies(moviesApi.data.results);
      } else {
        setMovies((prevMovies) => prevMovies.concat(moviesApi.data.results)); //para que no me reemplace las movies anteriores
        setHasMore(moviesApi.data.page < moviesApi.data.total_pages); //Cuando se acaban las páginas el hasMore pasa a false.
      }
      setLoading(false); 
    }
    getMovies();
  }, [search, page]); //A parte de que se cargue por primera vez el efecto cuando se carga el componente, si cambia el parámetro search o el page el efecto se vuelve a ejecutar.

  if (!loading && movies.length === 0) {
    return <NotFound />;
  }

  // Cuando llego al final de la página, cambio a la siguiente página. (A la página anterior le suma 1).
  // Si el parámetro hasMore está en true se ejecutará mi controlador de páginas
  const handlePageChange = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <HeaderFondo />
      <Filter setFilterMovies={setFilterMovies} />
      <section className={styles.section__movies}>
        {movies
          .filter((movie) => movie.vote_average >= (filterMovies - 1) * 2)
          .map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
      </section>
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore} //Si está en true siempre quedará buscando más páginas.
        next={handlePageChange}
        loader={<Spinner />} //Se muestra el spinner cuando esté cargando la siguiente página.
      />
    </>
  );
}

export default Movies;
