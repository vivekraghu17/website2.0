import React from "react";
import styles from "../../Stylesheets/bootcampOption.module.scss";
import ladyWithLaptop from "../../Assets/lady-with-laptop.png";
import guyTeaching from "../../Assets/guy-teaching.png";
import DoneIcon from "@mui/icons-material/Done";
const studentInformation = [
  {
    key: "1",
    heading: "Build and launch scalable programs",
    body: "Gritly’s next-gen LMS is a platform that enables education providers to quickly build and launch scalable, role-specific, technology training programs.",
  },
  {
    key: "2",
    heading: "Increase enrollment",
    body: "Gritly’s platform provides you with access to candidates who are eager to upskill and find their next dream job",
  },
  {
    key: "3",
    heading: "Improve placement rates",
    body: "By partnering with hiring managers at some of the most exciting tech companies, Gritly can help more of your candidates get hired faster.",
  },
];
export default function BootcampOption() {
  return (
    <div className={styles["root-div"]}>
      <div className={styles["main-div"]}>
        <div className={styles["left-side-images"]}>
          <img
            src={guyTeaching}
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
