import { Button } from "@mui/material";
import React from "react";
import styles from "../../Stylesheets/joinTodayBanner.module.scss";
import joinTodayLady from "../../Assets/join-today-banner.png";
export default function JoinTodayBanner() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["left-side-texts"]}>
        <div className={styles["banner-header"]}>Talk to our specialist</div>
        <div className={styles["banner-sub-texts"]}>
          Fringilla non proin nec in in lorem amet eget ac. Mauris.
        </div>
        <Button className={styles["join-today-btn"]}>Join Today</Button>
      </div>
      <div className={styles["right-side-image"]}>
        <img src={joinTodayLady} alt="lady" className={styles["lady"]} />
      </div>
    </div>
  );
}
