import React, { Fragment } from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import ImageCard from "../../components/ImageCard/ImageCard";
import { brandingData } from "../../data";
import styles from "./styles.module.scss";

const Branding = () => {
  return (
    <Fragment>
      <div className={styles.branding}>
        <CustomCarousel data={brandingData}>
          {brandingData?.map((item) => (
            <div key={item.id} className={styles.carouselItem}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.title}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </CustomCarousel>
      </div>
      <div className={styles.brandingSm}>
        {brandingData?.map((item) => (
          <ImageCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </Fragment>
  );
};

export default Branding;
