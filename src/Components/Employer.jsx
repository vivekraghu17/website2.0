import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../Stylesheets/employer.module.scss";
import ladyWithLaptop from "../Assets/lady-with-laptop.png";
import guyTeaching from "../Assets/guy-teaching.png";
import { Button } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import talkToSpecialistBanner from "../Assets/talk-to-specialist-banner.png";
const data = [
  {
    key: "1",
    heading: "Sit quam gravida",
    body: "Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.",
  },
  {
    key: "2",
    heading: "Elementum enim tempus",
    body: "Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.",
  },
  {
    key: "3",
    heading: "Sit quam gravida",
    body: "Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.",
  },
  {
    key: "4",
    heading: "Elementum enim tempus",
    body: "Et hendrerit turpis habitant cursus semper ultrices in nunc. Erat eget etiam senectus vestibulum risus.",
  },
];
const howWeDoIt = [
  {
    key: "1",
    header: "Explore Different roles",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.",
  },
  {
    key: "2",
    header: "Explore Different roles",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.",
  },
  {
    key: "3",
    header: "Explore Different roles",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.",
  },
];
export default function Employer() {
  return (
    <div>
      <Header />
      <div className={styles["main-div"]}>
        <div className={styles["main-banner"]}>
          <div className={styles["banner-header"]}>For employer</div>
          <div className={styles["banner-sub-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <Button className={styles["join-today-btn"]}>Join Today</Button>
        </div>
        <div className={styles["benefit-1-section"]}>
          <div className={styles["left-side-images"]}>
            <div className={styles["blue-background"]}></div>
            <img
              src={ladyWithLaptop}
              alt="ladywithlaptop"
              className={styles["ladywithlaptop"]}
            />
          </div>
          <div className={styles["right-side-information"]}>
            <div className={styles["header-wrapper"]}>
              <div className={styles["header"]}>Benefit 1</div>
            </div>
            <div className={styles["information-points-wrapper"]}>
              {data.map((item, key) => {
                return (
                  <div className={styles["points"]} key={key}>
                    <div className={styles["heading"]}>{item.heading}</div>
                    <div className={styles["body"]}>{item.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["benefit-2-section"]}>
          <div className={styles["left-side-information"]}>
            <div className={styles["header-wrapper"]}>
              <div className={styles["header"]}>Benefit 2 </div>
            </div>
            <div className={styles["information-points-wrapper"]}>
              {data.map((item, key) => {
                return (
                  <div className={styles["points"]} key={key}>
                    <div className={styles["heading"]}>{item.heading}</div>
                    <div className={styles["body"]}>{item.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles["right-side-images"]}>
            <div className={styles["blue-background"]} />
            <img
              src={guyTeaching}
              alt="guy-teaching"
              className={styles["guy-teaching"]}
            />
          </div>
        </div>
        <div className={styles["benefit-3-section"]}>
          <div className={styles["left-side-images"]}>
            <div className={styles["blue-background"]}></div>
            <img
              src={ladyWithLaptop}
              alt="ladywithlaptop"
              className={styles["ladywithlaptop"]}
            />
          </div>
          <div className={styles["right-side-information"]}>
            <div className={styles["header-wrapper"]}>
              <div className={styles["header"]}>Benefit 3</div>
            </div>
            <div className={styles["information-points-wrapper"]}>
              {data.map((item, key) => {
                return (
                  <div className={styles["points"]} key={key}>
                    <div className={styles["heading"]}>{item.heading}</div>
                    <div className={styles["body"]}>{item.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["how-we-do-it-section"]}>
          <div className={styles["header-wrapper"]}>
            <div className={styles["header"]}>How we do it</div>
            <div className={styles["sub-heading"]}>
              Our programs are built around proven learning principles,
              first‑rate technology, and immersive exchanges with industry
              experts; everything you need to transform your career.
            </div>
          </div>
          <div className={styles["information-wrapper"]}>
            <div className={styles["left-side-wrapper"]}>
              <div className={styles["heading"]}>
                we build bridges between companies and Students
              </div>
              <div className={styles["sub-heading"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
              </div>
              <Button className={styles["join-today-btn"]}>Join Today</Button>
            </div>
            <div className={styles["right-side-wrapper"]}>
              {howWeDoIt.map((item, key) => {
                return (
                  <div className={styles["point-wrapper"]} key={key}>
                    <div className={styles["heading"]}>
                      <div className={styles["pointer"]}>
                        <DoneOutlineIcon />
                      </div>
                      {item.header}
                    </div>
                    <div className={styles["body"]}>{item.body}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["bottom-section"]}>
          <img src={talkToSpecialistBanner} alt="talk to specialist" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
