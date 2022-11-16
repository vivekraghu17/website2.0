import React from "react";
import styles from "../../Stylesheets/employerOption.module.scss";
import ladyWithLaptop from "../../Assets/lady-with-laptop.png";
import DoneIcon from "@mui/icons-material/Done";

const studentInformation = [
  {
    key: "1",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
  },
  {
    key: "2",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
  },
  {
    key: "3",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
  },
  {
    key: "4",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
  },
  {
    key: "5",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
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
