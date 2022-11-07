import React from "react";
import logo from "../Assets/gritly.png";
import styles from "../Stylesheets/footer.module.scss";
const footerMenu = [
  {
    key: "companies",
    label: "Companies",
    route: "",
  },
  {
    key: "bootcamp",
    label: "Bootcamps",
    route: "",
  },
  {
    key: "candidates",
    label: "Candidates",
    route: "",
  },
  {
    key: "contact",
    label: "Contact",
    route: "",
  },
];
export default function Footer() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["row-1"]}>
        <img src={logo} alt="gritlylogo" />
        {footerMenu.map((item, key) => {
          return (
            <div key={key} className={styles["items"]}>
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={styles["row-2"]}>
        <span>gritly 2022 All right reserved</span>
      </div>
    </div>
  );
}
