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
  const [page, setPage] = useState(1);
  const [filterMovies, setFilterMovies] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // Primero se carga el componente y luego se ejecuta el efecto
  useEffect(() => {
    setLoading(true);
    const searchUrlMovie = search
      ? `https://api.themoviedb.org/3/search/movie?query=${search}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=af29515c6aa30c89141d36fb25af9426&page=${page}`; //le paso &page al query como otra condición de busqueda más la página
    async function getMovies() {
      const moviesApi = await axios.get(searchUrlMovie, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjI5NTE1YzZhYTMwYzg5MTQxZDM2ZmIyNWFmOTQyNiIsInN1YiI6IjYyOWY2NDIzODUwMDVkMDA1MmI5NmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Db8x8Pn59YG6Wh0b_shbdmtgyzLoDq7Eox_MJqTFPA",
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      console.log(moviesApi.data.results);
      if (page === 1) {
        setMovies(moviesApi.data.results);
      } else {
        setMovies((prevMovies) => prevMovies.concat(moviesApi.data.results)); //para que no me reemplace las movies anteriores
      }
      setHasMore(moviesApi.data.page < moviesApi.data.total_pages);
    }
    getMovies();
    setLoading(false);
  }, [search, page]); //A parte de que se cargue por primera vez el efecto cuando se carga el componente, si cambia el parámetro search el efecto se vuelve a cargar.

  if (movies.length === 0) {
    return <NotFound />;
  }

  // cuando llego al final de la página cambio a la siguiente página. (A la página anterior le suma 1)
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
        hasMore={hasMore}
        next={handlePageChange}
        loader={<Spinner />}
      />
    </>
  );
}

export default Movies;
