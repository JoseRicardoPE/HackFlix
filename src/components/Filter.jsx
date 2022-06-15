import ReactStars from "react-rating-stars-component";
import styles from "./Filter.module.css";

function Filter({setFilterMovies}) {
  const ratingChanged = (newRating) => {
    setFilterMovies(newRating);
  };

  return (
        <section className={styles.content__rating}>
          <span className={styles.content__rating__span}>
            Filter by rating:
          </span>
          <span className={styles.content__rating__ReactStars}>
            <ReactStars 
              count={5}
              onChange={ratingChanged}
              size={40}
              color={"#fff"}
              activeColor={"#00ffff"}
              isHalf={true}
            />
          </span>
          <span className={styles.content__rating__span}>& More</span>
        </section>
    
  )
}

export default Filter;
