import React from "react";
import styles from "../../Stylesheets/employerOption.module.scss";
import ladyWithLaptop from "../../Assets/lady-with-laptop.png";
import DoneIcon from "@mui/icons-material/Done";

const studentInformation = [
  {
    key: "1",
    heading: "Source The Best Talent",
    body: "Using Gritly’s intelligent suite of tools, hiring managers can quickly and easily discover, organize and track the talent they’re looking for through the platform.",
  },
  {
    key: "2",
    heading: "Maximize retention",
    body: "Gritly’s performance tracking ensures a candidate can do the job before they get the job. This helps you improve employee retention by selecting candidates who have the skills you need.",
  },
  {
    key: "3",
    heading: "Expedite time to hire",
    body: "By selectively connecting candidates with the most suitable training providers and hiring managers, Gritly’s matchmaking speeds up time to hire and helps ensure that all roles are being filled by the best candidates.",
  },
];
export default function EmployerOption() {
  return (
    <div className={styles["root-div"]}>
      <div className={styles["main-div"]}>
        <div className={styles["left-side-images"]}>
          <img
            src={ladyWithLaptop}
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
