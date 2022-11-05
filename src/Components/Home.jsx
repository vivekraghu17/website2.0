import React from "react";
import styles from "../Stylesheets/home.module.scss";
import Header from "./Header";
import Button from "@mui/material/Button";
import live from "../Assets/live.png";
import guywithlaptop from "../Assets/guy-with-laptop.png";
import dailyTask from "../Assets/dailytask.png";

const optionView = [
  {
    key: "employer",
    value: "Employer",
    selected: true,
  },
  {
    key: "bootcamp",
    value: "Bootcamp",
    selected: false,
  },
  {
    key: "students",
    value: "Students",
    selected: false,
  },
];
export default function Home() {
  const [options, setOptions] = React.useState(optionView);

  const handleOption = (key) => {
    options.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    console.log(options);
  };
  React.useEffect(() => {
    setOptions(options);
  }, [options]);

  return (
    <div className={styles["main-div"]}>
      <Header />
      <div className={styles["home-banner"]}>
        <div className={styles["header-texts"]}>
          <div className={styles["help-text"]}>We are helping you</div>
          <div className={styles["launch-text"]}>
            Launch Your Career in Tech
          </div>
          <div className={styles["launch-sub-text"]}>
            Launch your career in tech with no experience in 4-6 months.Get
            access to high paying jobs in the fastest growing industry globally
          </div>
          <div className={styles["apply-section"]}>
            <Button className={styles["apply-now-btn"]}>Apply Now</Button>
            <a href="google.com" className={styles["hire-students"]}>
              Hire Students
            </a>
          </div>
        </div>
        <div className={styles["header-images"]}>
          <img
            src={guywithlaptop}
            alt="guy with laptop"
            className={styles["guy-with-laptop"]}
          />
          <img
            src={dailyTask}
            alt="dailytask"
            className={styles["daily-task"]}
          />
          <img src={live} alt="live" className={styles["live"]} />
        </div>
      </div>
      <div className={styles["who-we-serve-section"]}>
        <div className={styles["header-section"]}>
          <div className={styles["heading"]}>Who We Serve</div>
          <div className={styles["sub-heading"]}>
            Neque, pulvinar vestibulum non aliquam.
          </div>
        </div>
        <div className={styles["options-section"]}>
          {options.map((item, key) => {
            return (
              <Button
                className={`${styles["option"]} ${
                  item.selected ? styles["selected"] : ""
                }`}
                key={key}
                onClick={() => {
                  handleOption(item.key);
                }}
              >
                {item.value}
              </Button>
            );
          })}
        </div>
        <div className={styles["information"]}></div>
      </div>
    </div>
  );
}
