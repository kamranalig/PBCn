import { ContentBox } from "../../components/ContentBox/ContentBox";
import styles from "./styles.module.scss";
import image from "../../assets/images/home/PBC-Logo-Mobile-Orange.png";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="paperbird" />
      </div>
      <ContentBox />
    </div>
  );
};
