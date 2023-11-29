import React, { Fragment } from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import ImageCard from "../../components/ImageCard/ImageCard";
import { printData } from "../../data";
import styles from "./styles.module.scss";

const PrintAndPublication = () => {
  return (
    <Fragment>
      <div className={styles.printAndPublication}>
        <CustomCarousel data={printData}>
          {printData?.map((item) => (
            <div key={item.id} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <p className={styles.title}>{item.title}</p>
            </div>
          ))}
        </CustomCarousel>
      </div>
      <div className={styles.printAndPublicationSm}>
        {printData?.map((item) => (
          <ImageCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </Fragment>
  );
};

export default PrintAndPublication;
