import React from "react";
import { Link } from "react-router-dom";
import { sidebarMenuItems } from "../../data";
import styles from "./styles.module.scss";

const MenuSm = () => {
  return (
    <div className={styles.menuSm}>
      <div className={styles.menuBox}>
        <div>
          {
            // write first thee items of sidebarMenuItems
            sidebarMenuItems.slice(0, 3).map((item) => (
              <div className={styles.menuItem} key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))
          }
        </div>
        <div>
          <div className={styles.dotBullets}></div>
          <div className={styles.dotBullets}></div>
          <div className={styles.dotBullets}></div>
        </div>
        <div className={styles.secondCol}>
          {
            // write the last three items of sidebarMenuItems
            sidebarMenuItems.slice(3, 6).map((item) => (
              <div className={styles.menuItem} key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MenuSm;
