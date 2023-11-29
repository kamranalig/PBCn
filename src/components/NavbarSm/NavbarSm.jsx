import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import menuIcon from "../../assets/images/icons/menu.png";
import emailIcon from "../../assets/Email Icon - Blue.svg";
import MenuListSm from "../MenuListSm/MenuListSm";
import { Link } from "react-router-dom";
const NavbarSm = () => {
  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      const isEvent = ref?.current?.contains(event.target);
      if (ref && !isEvent) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div className={styles.navbarSm}>
        {menuOpen ? (
          <div ref={ref} className={styles.menuListSmWrapper}>
            <MenuListSm onClose={() => setMenuOpen(false)} />
          </div>
        ) : null}
        <img
          ref={ref}
          src={menuIcon}
          alt="paperbird"
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className={styles.socialIcon}>
          <Link to="/contact">
            <img src={emailIcon} alt="paperbird" className={styles.emailIcon} />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarSm;
