import { ReactComponent as Cross } from "./cross.svg";
import styles from "./images.module.css";

const CrossComponent = () => (<Cross className={styles.cross} aria-label="close"/>);

export default CrossComponent;