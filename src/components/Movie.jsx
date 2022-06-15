import styles from "./Movie.module.css";
import { Link } from "react-router-dom";
import placeHolder from "../components/assets/placeHolder.jpg";

function Movie({ movie }) {
  const movieImageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : placeHolder;
  return (
    // <> fragment (etiquetas vacías) ->
    <>
      <Link to={`/pelicula/${movie.id}`}>
        <figure className={styles.content__movie}>
          <img className={styles.content__movie__img} src={movieImageUrl} alt={movie.title} />
        </figure>
      </Link>
    </>
  );
}

export default Movie;
