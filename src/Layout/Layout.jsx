import react, { Fragment } from "react";
import { Col, Row } from "antd";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ContentPlaceholder } from "../sections/ContentPlaceholder/ContentPlaceholder";
import NavbarSm from "../components/NavbarSm/NavbarSm";
import styles from "./styles.module.scss";
import ContentPlaceholderSm from "../sections/ContentPlaceholderSm/ContentPlaceholderSm";
import Footer from "../components/Footer/Footer";

export const Layout = ({ children, type = "gallery" }) => {
  return (
    <Fragment>
      <div className={styles.layout}>
        <Navbar />
        <Row>
          <Col span={5}>
            <Sidebar />
          </Col>
          <Col span={19}>
            <ContentPlaceholder type={type}>{children}</ContentPlaceholder>
          </Col>
        </Row>
      </div>
      <div className={styles.layoutSm}>
        <div className={styles.navbarSmWrapper}>
          <NavbarSm />
        </div>
        <ContentPlaceholderSm>{children}</ContentPlaceholderSm>
      </div>
      <Footer />
    </Fragment>
  );
};
