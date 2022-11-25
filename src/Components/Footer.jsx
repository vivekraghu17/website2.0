import React from "react";
import logo from "../Assets/gritly.svg";
import styles from "../Stylesheets/footer.module.scss";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";

export default function Footer() {
  return (
    <div className={styles["footer-container-wrapper"]}>
      <div className={styles["logo-wrapper"]}>
        <img src={logo} alt="gritlylogo" className={styles["gritly-logo"]} />
      </div>
      <div className={styles["copyrights-wrapper"]}>
        <span>
          {" "}
          Copyright © {new Date().getFullYear()} Gritly. All rights reserved
        </span>
      </div>
      <div className={styles["social-media-wrapper"]}>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
