import { CgSpinner } from "react-icons/cg";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <CgSpinner className={styles.spinning} size={100} />
    </div>
  );
}

export default Spinner;
