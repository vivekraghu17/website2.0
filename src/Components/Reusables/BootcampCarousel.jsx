import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { Button } from "@mui/material";
import styles from "../../Stylesheets/bootcampCarousel.module.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1000, itemsToShow: 1, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 1, itemsToScroll: 1 },
];
const bootcamp = [
  {
    key: "1",
    title: "Bootcamp-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    key: "2",
    title: "Bootcamp-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    key: "3",
    title: "Bootcamp-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];
export default function BootcampCarousel() {
  return (
    <div className={styles["bootcamp-carousel"]}>
      <ReactElasticCarousel
        breakPoints={breakPoints}
        className={styles["carousel"]}
      >
        {bootcamp.map((item, key) => {
          return (
            <div className={styles["bootcamp-div"]} key={key}>
              <div className={styles["title"]}>{item.title}</div>
              <div className={styles["description"]}>{item.description}</div>
              <Button className={styles["explore-btn"]}>Explore Courses</Button>
            </div>
          );
        })}
      </ReactElasticCarousel>
    </div>
  );
}
