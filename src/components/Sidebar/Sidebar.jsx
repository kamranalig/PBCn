import { sidebarMenuItems } from "../../data";
import { CONSTANTS } from "../../utils/constants";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const renderLinkContent = (item, hasChildren = false) => {
    if (!hasChildren) {
      return <Link to={item.link}>{item.title}</Link>;
    }
    return (
      <>
        <Link to="#">{item.title}</Link>
        <div className={styles.subMenu}>
          {item.subMenu?.map((sub) => {
            return (
              <Link key={sub.id} to={sub.link}>
                {sub.title}
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={styles.sidebar}>
      <img
        src="/images/logo.svg"
        alt="discovery by nature logo"
        className={styles.logo}
        onClick={() => navigate("/about")}
      />
      <div className={styles.menuWrapper}>
        {sidebarMenuItems.map((item) => {
          return (
            <div key={item.id} className={styles.link}>
              <span dangerouslySetInnerHTML={{ __html: CONSTANTS.bulletSymbol }} />
              {renderLinkContent(item, item.subMenu)}
            </div>
          );
        })}

        <div className={styles.link}>
          <span dangerouslySetInnerHTML={{ __html: CONSTANTS.bulletSymbol }} />
          <a
            href="https://www.flickr.com/photos/hopeonthewing/albums/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHOTOGRAPHY
          </a>
        </div>
        <div className={styles.link}>
          <span dangerouslySetInnerHTML={{ __html: CONSTANTS.bulletSymbol }} />
          <a
            href="/images/PDFs/ClientGuideToCreativeServices.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CLIENT GUIDE TO CREATIVE SERVICES
          </a>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.owner}>{CONSTANTS.ownerName}</p>
        <p className={styles.designation}>{CONSTANTS.ownerDesignation}</p>
        <a href={`mailto:${CONSTANTS.ownerEmail}`}>{CONSTANTS.ownerEmail}</a>
      </div>
    </div>
  );
};
