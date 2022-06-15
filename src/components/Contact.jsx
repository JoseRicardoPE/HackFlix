import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs"; 
import { BsTwitter } from "react-icons/bs"; 
import { BsWhatsapp } from "react-icons/bs"; 
import { SiGmail } from "react-icons/si"; 
import { BsInstagram } from "react-icons/bs"; 
import styles from "./Contact.module.css"

function Contact() {
  return (
    <section className={styles.about__content}>
      <div className={styles.about__paragraph}>
        <h2 className={styles.about__title}>HackFlix Contacts</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. {" "}
        </p>
        <span className={styles.about__icons}>
          <BsFacebook className={styles.icon}/>
          <BsTwitter className={styles.icon}/>
          <BsInstagram className={styles.icon}/>
          <BsWhatsapp className={styles.icon}/>
          <SiGmail className={styles.icon}/>
        </span>
        <div className={styles.text}>
          <Link to={"/"}>
            <button className={styles.movieDetails__button}>Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
