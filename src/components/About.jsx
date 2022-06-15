import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about__content}>
      <div className={styles.about__paragraph}>
        <h2 className={styles.about__title}>About Us</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          suscipit imperdiet varius. Integer rhoncus ipsum sit amet condimentum
          tincidunt. Quisque vel rutrum mi, non elementum odio. Nunc sit amet
          tellus quis erat consectetur condimentum ac sed lorem. Suspendisse sed
          egestas mi. Sed arcu elit, ultricies eu diam mattis, tincidunt blandit
          urna. In ac leo a nisi tempor rutrum. Vestibulum ut nulla eget nisi
          facilisis auctor. Aliquam pulvinar libero eget pulvinar volutpat.
          Mauris imperdiet massa quis commodo dapibus. Quisque faucibus
          elementum ligula tempor dapibus. Mauris sagittis odio sit amet odio
          pretium eleifend.{" "}
        </p>
        <p className={styles.paragraph}>
          Duis tempor, mi ut vestibulum mollis, felis urna cursus dui, sit amet
          iaculis sapien purus eu leo. Suspendisse in tincidunt dui. Fusce a
          venenatis nibh. Phasellus aliquam at lacus nec rutrum. Quisque a odio
          felis. Sed non ipsum dignissim, elementum metus non, dignissim urna.
          Etiam consequat, nibh sit amet finibus fermentum, elit mauris porta
          erat, a consequat augue lacus id purus. Ut non orci orci. Donec
          suscipit non magna quis semper. Maecenas id arcu in lectus pretium
          mollis ut vitae sapien. Vivamus eu tortor ac dolor bibendum viverra.
          Nunc varius mattis leo eu elementum. Curabitur non gravida tortor.
          Aliquam in malesuada enim.
        </p>
        <div className={styles.text}>
          <Link to={"/"}>
            <button className={styles.movieDetails__button}>Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
