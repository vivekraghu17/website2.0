import React from "react";
import logo from "../Assets/gritly.png";
import styles from "../Stylesheets/footer.module.scss";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import { useNavigate } from "react-router-dom";
const footerMenu = [
  {
    key: "companies",
    label: "Companies",
    route: "/employer",
  },
  {
    key: "bootcamp",
    label: "Bootcamps",
    route: "/bootcamp",
  },
  {
    key: "candidates",
    label: "Candidates",
    route: "/candidate",
  },
  {
    key: "contact",
    label: "Contact",
    route: "/contactus",
  },
];
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles["main-div"]}>
      <div className={styles["row-1"]}>
        <img
          src={logo}
          alt="gritlylogo"
          className={styles["gritly-logo"]}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        />
        {footerMenu.map((item, key) => {
          return (
            <div
              key={key}
              className={styles["items"]}
              onClick={() => {
                navigate(`${item.route}`);
              }}
            >
              {item.label}
            </div>
          );
        })}
        <div className={styles["row-2"]}>
          <span>gritly 2022 All right reserved</span>
        </div>
        <div className={styles["social-media-wrapper"]}>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}
