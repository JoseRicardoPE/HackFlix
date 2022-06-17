 import { Link } from "react-router-dom";
import Search from "./Search";
import styles from "./Header.module.css";

function Header() {
  return (
    <section className={styles.section__header}>
      <nav className={styles.navbar}>
        {/* <figure className={styles.navbar__logo}></figure> */}
        <div className={styles.navbar__links}>
          <Link to="/" className={styles.navbar__link}>
            Home
          </Link>
          <Link to="/about" className={styles.navbar__link}>
            About
          </Link>
          <Link to="/contact" className={styles.navbar__link}>
            Contact
          </Link>
        </div>
        <Search />
      </nav>
    </section>
  );
}

export default Header;
