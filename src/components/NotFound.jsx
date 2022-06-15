import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { GiPopcorn } from "react-icons/gi";

function NotFound() {
  return (
    <section className={styles.notFound__content}>
      <div className={styles.notFound__texts}>
        <h2 className={styles.notFound__title}>Oops... ¡Movie not found!</h2>
        <p className={styles.notFound__paragraph}>
          <GiPopcorn className={styles.popCorn} />
          Sorry, but you are looking for a movie that is not here.
          <GiPopcorn className={styles.popCorn} />
        </p>
        <p className={styles.notFound__paragraph}>¡Please, do your search again!</p>
        <div className={styles.text}>
          <Link to={"/"}>
            <button className={styles.movieDetails__button}>Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
