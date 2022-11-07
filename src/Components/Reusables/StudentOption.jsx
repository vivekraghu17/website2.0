import React from "react";
import styles from "../../Stylesheets/studentOption.module.scss";
import ladyWithLaptop from "../../Assets/lady-with-laptop.png";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

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
  {
    key: "6",
    heading: "Tempor egestas augue",
    body: "Eu metus, at orci dui sapien. Semper fames est ut gravida. Neque pellentesque risus ut odio.",
  },
];
export default function StudentOption() {
  return (
    <div className={styles["root-div"]}>
      <div className={styles["main-div"]}>
        <div className={styles["left-side-images"]}>
          <div className={styles["blue-background"]} />
          <img
            src={ladyWithLaptop}
            alt="lady with laptop"
            className={styles["lady-with-laptop"]}
          />
        </div>
        <div className={styles["right-side-information"]}>
          {studentInformation.map((item, key) => {
            return (
              <div className={styles["info-wrapper"]} key={key}>
                <div className={styles["pointer"]}>
                  <DoneOutlineOutlinedIcon
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
