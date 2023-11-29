import React from "react";
import styles from './styles.module.scss'

const ImageCard = ({ title, image }) => {
  return (
    <div>
      <div className={styles.imageCard}>
        <div className={styles.outline}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={title || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
