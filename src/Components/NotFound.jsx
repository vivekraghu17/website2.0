import React from "react";
import styles from "../Stylesheets/notFound.module.scss";
import errorBanner from "../Assets/404notfound.png";
export default function NotFound() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["header-banner"]}>
        <div className={styles["header"]}>Not found</div>
      </div>
      <div className={styles["error-banner"]}>
        <img
          src={errorBanner}
          alt="not found"
          className={styles["error-image"]}
        />
      </div>
    </div>
  );
}
