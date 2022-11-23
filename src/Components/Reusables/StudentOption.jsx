import React from "react";
import styles from "../../Stylesheets/studentOption.module.scss";
import studentLearning from "../../Assets/student-learning.png";
import DoneIcon from "@mui/icons-material/Done";
const studentInformation = [
  {
    key: "1",
    heading: "Get hired faster",
    body: "Gritly’s platform helps you to identify your next career move, connect with the right upskilling program, and get hired after completion.",
  },
  {
    key: "2",
    heading: "Earn more money",
    body: "Connect with programs that teach you how to get a job in your dream industry, and find companies that need to hire new employees with your set of skills and experience.",
  },
  {
    key: "3",
    heading: "Get help upskilling",
    body: "Gritly helps you identify your next career path and connect you with the right upskilling program to make your next career move.",
  },
];
export default function StudentOption() {
  return (
    <div className={styles["root-div"]}>
      <div className={styles["main-div"]}>
        <div className={styles["left-side-images"]}>
          <img
            src={studentLearning}
            className={styles["lady-with-laptop"]}
            alt="lady-with-laptop"
          />
        </div>
        <div className={styles["right-side-information"]}>
          {studentInformation.map((item, key) => {
            return (
              <div className={styles["info-wrapper"]} key={key}>
                <div className={styles["pointer"]}>
                  <DoneIcon
                    sx={{ transform: "rotate(-45deg)", color: "white" }}
                  />
                </div>
                <div className={styles["information"]}>
                  <div className={styles["heading"]}>{item.heading}</div>
                  <div className={styles["body"]}>{item.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
