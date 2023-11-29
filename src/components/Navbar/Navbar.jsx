import { Popover } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { menuItems } from "../../data";
import menuIcon from "./../../assets/images/icons/menu-outlined.png";

export const Navbar = () => {
  const title = () => null;
  const content = (
    <div className={styles.menu}>
      {menuItems.map((m) => {
        return m.link ? (
          <Link key={m.id} to={m.link} className={styles.item}>
            {m.title}
          </Link>
        ) : (
          <a
            href="https://www.flickr.com/photos/hopeonthewing/albums/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            Photography
          </a>
        );
      })}
      <Link
        className={styles.item}
        onClick={() => {
          window.open("/images/PDFs/ResumeDesign_Alissa-Pendorf.pdf", "_blank");
        }}
      >
        Resumé
      </Link>
    </div>
  );
  return (
    <div className={styles.navbar}>
      <Popover
        placement="bottomRight"
        title={title}
        content={content}
        trigger="hover"
        showArrow={false}
        arrow={false}
      >
        <img src={menuIcon} alt="" className={styles.icon} />
        {/* <MenuOutlined className={styles.icon} /> */}
      </Popover>
    </div>
  );
};
