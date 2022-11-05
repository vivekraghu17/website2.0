import React from "react";
import Logo from "../Assets/gritly.png";
import styles from "../Stylesheets/header.module.scss";
import Button from "@mui/material/Button";

const headerMenu = [
  {
    key: "home",
    label: "Home",
    route: "",
  },
  {
    key: "about-us",
    label: "About Us",
    route: "",
  },
  {
    key: "blogs",
    label: "Blogs",
    route: "",
  },
  {
    key: "careers",
    label: "Careers",
    route: "",
  },
  {
    key: "solutions",
    label: "Solutions",
    route: "",
  },
];

export default function Header() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["logo-section"]}>
        <img src={Logo} alt="gritly-logo" className={styles["logo-image"]} />
      </div>
      <div className={styles["menu-section"]}>
        {headerMenu.map((item, key) => {
          return (
            <div key={key} className={styles["items"]}>
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={styles["user-options"]}>
        <Button className={styles["login-btn"]}>Login</Button>
        <Button className={styles["register-btn"]} variant="outlined">
          Register
        </Button>
      </div>
    </div>
  );
}
