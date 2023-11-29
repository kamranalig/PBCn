import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import MenuSm from "../../components/MenuSm/MenuSm";

const ContentPlaceholderSm = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Fragment>
      {pathname !== "/about" && pathname !== "/contact" && <MenuSm />}
      {children}
    </Fragment>
  );
};

export default ContentPlaceholderSm;
