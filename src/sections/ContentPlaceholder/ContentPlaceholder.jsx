import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

export const ContentPlaceholder = ({ children, type }) => {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        backgroundImage: pathname == "/about" ? `url('/images/PBC-AboutBackground.jpg')` : "",
      }}
      className={`${styles.contentWrapper} ${type === "home" ? styles.contentHome : ""}`}
    >
      {children}
    </div>
  );
};

ContentPlaceholder.propTypes = {
  children: PropTypes.node,
};
