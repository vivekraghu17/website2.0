import { Button } from "@mui/material";
import React from "react";
import styles from "../../Stylesheets/joinTodayBanner.module.scss";
import joinTodayLady from "../../Assets/join-today-banner.png";
import { useNavigate } from "react-router-dom";
export default function JoinTodayBanner() {
  const navigate = useNavigate();
  return (
    <div className={styles["main-div"]}>
      <div className={styles["left-side-texts"]}>
        <div className={styles["banner-header"]}>Talk to our specialist</div>
        <Button
          className={styles["join-today-btn"]}
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </Button>
      </div>
      <div className={styles["right-side-image"]}>
        <img src={joinTodayLady} alt="lady" className={styles["lady"]} />
      </div>
    </div>
  );
}
