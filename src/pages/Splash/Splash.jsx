import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { dbnLogo, dbnLogoStack, pbcLogo, pbcLogoStack } from "../../data/images";

export const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.imageWrapper}>
        <Link to="/about" className={styles.pbcLogo}>
          <img src={pbcLogo} alt="Paper Bird Creative" />
        </Link>
        <div className={styles.verticalLine}></div>
        <hr className={styles.horizontalLine} />
        <a href="https://discoverybynature.com" className={styles.dbnLogo}>
          <img src={dbnLogo} alt="Discovery By Nature" />
        </a>
      </div>
    </div>
  );
};
