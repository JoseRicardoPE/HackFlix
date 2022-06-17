import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import Spinner from "./Spinner";
import placeHolder from "../components/assets/placeHolder.jpg";

function MovieDetails() {
  const { id } = useParams(); //Necesario para poder capturar el parámetro de la URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = process.env.REACT_APP_API;

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      const movieById = await axios.get(
        `${API}/movie/${id}?api_key=af29515c6aa30c89141d36fb25af9426`
      );
      console.log(movieById.data); //No se utilizó .results porque el endpoint que me devuelve es el de la película en sí.
      setMovie(movieById.data);
      setLoading(false); //cuando se termina de cargar la película el setLoading queda en false.
    }

    getMovie();
  }, [id]); //Ciclo de vida -> componentDidMount (Primero se renderiza el componente MovieDetails, luego se aplica el useEffect a traves de axios)

  if (loading) {
    return <Spinner />;
  }

  function movieMap() {
    return movie.genres.map((genre) => genre.name).join(" | ");
  }

  const movieImageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : placeHolder;

  return (
    <section className={styles.movieDetails__container}>
      <figure className={`${styles.movieDetails__figure} ${styles.column}`}>
        <img
          className={styles.movieDetails__img}
          src={movieImageUrl}
          alt={movie.title}
        />
      </figure>
      <section className={`${styles.movieDetails__texts} ${styles.column}`}>
        <h2 className={styles.movieDetails__title}>{movie.title}</h2>
        <p className={styles.movieDetails__genres}>
          <strong>Genres:</strong>
          {movieMap()}
        </p>
        <p className={styles.movieDetails__overview}>
          <strong>Overview:</strong>
          {movie.overview}
        </p>
        <div className={styles.text}>
          <Link to={"/"}>
            <button className={styles.movieDetails__button}>Home</button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default MovieDetails;
