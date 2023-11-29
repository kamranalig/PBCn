import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data";
import styles from "./styles.module.scss";

const MenuListSm = ({ onClose }) => {
  return (
    <div className={styles.menuListSm}>
      {menuItems.map((item) => (
        <Link key={item.id} to={item.link} className={styles.link} onClick={() => onClose()}>
          {item.title}
        </Link>
      ))}
      <a
        href="https://www.flickr.com/photos/hopeonthewing/albums/"
        target="_blank"
        className={styles.link}
      >
        Photography
      </a>
      <a
        href="/images/PDFs/ClientGuideToCreativeServices.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        onClick={() => onClose()}
      >
        Client Guide to Creative Services
      </a>
      <Link to="/contact" className={styles.link} onClick={() => onClose()}>
        Contact
      </Link>
    </div>
  );
};

export default MenuListSm;
