import React, { Fragment } from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import ImageCard from "../../components/ImageCard/ImageCard";
import { posterImages } from "../../data";
import styles from "./styles.module.scss";

export const Poster = () => {
  return (
    <Fragment>
      <div className={styles.poster}>
        <CustomCarousel data={posterImages}>
          {posterImages?.map((item) => (
            <div key={item.id} className={`${styles.carouselItem} bordered`}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <p className={styles.title}>{item.title}</p>
            </div>
          ))}
        </CustomCarousel>
      </div>
      <div className={styles.posterSm}>
        {posterImages?.map((item) => (
          <ImageCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </Fragment>
  );
};
