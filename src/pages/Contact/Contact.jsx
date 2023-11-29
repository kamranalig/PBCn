import React from "react";
import { CONSTANTS } from "../../utils/constants";
import styles from "./styles.module.scss";
import birdIcon from "../../assets/BirdSm.svg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <p className={styles.title}>Contact</p>
      <div className={styles.content}>
        <div>
          <p className={styles.owner}>{CONSTANTS.ownerName}</p>
          <p className={styles.designation}>{CONSTANTS.ownerDesignation}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={birdIcon} alt="paperbird contact" />
        </div>
        <p className={styles.phone}>{CONSTANTS.phone}</p>
        <a href={`mailto:${CONSTANTS.ownerEmail}`} className={styles.email}>
          design
          <br />
          @paperbirdcreative.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
