import React from "react";
import styles from "../Stylesheets/home.module.scss";
import Carousel from "react-elastic-carousel";
import Button from "@mui/material/Button";
import StudentOption from "./Reusables/StudentOption";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import homeBanner from "../Assets/banner.png";
import EmployerOption from "./Reusables/EmployerOption";
import BootcampOption from "./Reusables/BootcampOption";
import user1 from "../Assets/user1.png";
import user2 from "../Assets/user2.png";
import user3 from "../Assets/user3.png";
import JoinTodayBanner from "./Reusables/JoinTodayBanner";
import "../Stylesheets/HomeCarouselStyles.scss";
import Rating from "@mui/material/Rating";
import googleLogo from "../Assets/google-logo.png";
import techStarsLogo from "../Assets/techstars.png";
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
const candidateReviews = [
  {
    key: "1",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Marvin McKinney",
    designation: "Student Of STM",
    image: user1,
  },
  {
    key: "2",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Emilia Tadashi",
    designation: "Highschool Student",
    image: user2,
  },
  {
    key: "3",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
    image: user3,
  },
  {
    key: "4",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Marvin McKinney",
    designation: "Student Of STM",
    image: user1,
  },
  {
    key: "5",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Emilia Tadashi",
    designation: "Highschool Student",
    image: user2,
  },
  {
    key: "6",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
    image: user3,
  },
  {
    key: "7",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
    image: user1,
  },
  {
    key: "8",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
    image: user2,
  },
];
const faq = [
  {
    key: "1",
    question: "Voluptate exercitation incididunt aliquip deserunt.",
    answer:
      "Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure.",
  },
  {
    key: "2",
    question: "Voluptate exercitation incididunt aliquip deserunt.",
    answer:
      "Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure.",
  },
  {
    key: "3",
    question: "Voluptate exercitation incididunt aliquip deserunt.",
    answer:
      "Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure.",
  },
  {
    key: "4",
    question: "Voluptate exercitation incididunt aliquip deserunt.",
    answer:
      "Nulla Lorem mollit cupidatat irure. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure.",
  },
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 320, itemsToShow: 1 },
  { width: 375, itemsToShow: 1 },
  { width: 425, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 769, itemsToShow: 1 },
  { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
];
export default function Home() {
  const [options, setOptions] = React.useState(optionView);
  const [menu, setMenu] = React.useState("employer");
  const ref = React.useRef(null);
  const navigate = useNavigate();
  const handleOption = (key) => {
    options.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    setMenu(key);

    setOptions([...options]);
  };
  const [selected, setSelected] = React.useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={styles["main-div"]}>
      <div className={styles["home-banner"]}>
        <div className={styles["header-texts"]}>
          <div className={styles["launch-text"]}>
            Launch Your Career in Tech
          </div>
          <div className={styles["launch-sub-text"]}>
            Launch your career in tech with no experience in 4-6 months.Get
            access to high paying jobs in the fastest growing industry globally
          </div>
          <div className={styles["sponsor-text"]}>
            A{" "}
            <img
              src={googleLogo}
              alt="google"
              className={styles["google-logo"]}
            />{" "}
            Funded Company
          </div>
          <div className={styles["apply-section"]}>
            <a href="https://app.gritly.us/">
              <Button className={styles["apply-now-btn"]}>Apply Now</Button>
            </a>
            <a href="https://app.gritly.us" className={styles["hire-students"]}>
              Hire Students
            </a>
          </div>
        </div>
        <div className={styles["header-images"]}>
          <img
            src={homeBanner}
            alt="guy with laptop"
            className={styles["guy-with-laptop"]}
          />
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
        <div className={styles["information"]}>
          {menu === "employer" && <EmployerOption />}
          {menu === "bootcamp" && <BootcampOption />}
          {menu === "students" && <StudentOption />}
        </div>
        <div className={styles["learn-more-section"]}>
          <Button
            className={styles["learn-more-btn"]}
            onClick={() => {
              menu === "students"
                ? navigate(`/candidate`)
                : navigate(`/${menu}`);
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles["candidate-review-section"]}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["heading"]}>What our Candidates say</div>
        </div>
        <div className={styles["review-wrapper"]} id="cardmap" ref={ref}>
          <Carousel
            breakPoints={breakPoints}
            className={styles["carousel-styles"]}
          >
            {candidateReviews.map((item, key) => {
              return (
                <div className={styles["wrapper"]} key={key}>
                  <div className={styles["card"]} key={key}>
                    <div className={styles["user-image"]}>
                      <img src={item.image} alt="user" />
                    </div>
                    <div className={styles["review"]}>{item.review}</div>
                    <div className={styles["line"]}></div>
                    <div className={styles["user-info-wrapper"]}>
                      <div className={styles["user-info"]}>
                        <div className={styles["username"]}>
                          {item.username}
                        </div>
                        <div className={styles["designation"]}>
                          {item.designation}
                        </div>
                      </div>
                      <div className={styles["rating"]}>
                        <Rating name="read-only" value={5} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <JoinTodayBanner />
        <div className={styles["frequently-asked-section"]}>
          <div className={styles["heading"]}>Frequently Asked Questions ?</div>
          <div className={styles["sub-heading"]}>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt.{" "}
          </div>
          <div className={styles["accordion-wrapper"]}>
            <div className={styles["accordion"]}>
              {faq.map((item, key) => {
                return (
                  <div className={styles["item"]} key={key}>
                    <div
                      className={styles["title"]}
                      onClick={() => {
                        toggle(key);
                      }}
                    >
                      {item.question}
                      <span>
                        {selected === key ? <RemoveIcon /> : <AddIcon />}
                      </span>
                    </div>
                    <div
                      className={`${
                        selected === key
                          ? styles["content-show"]
                          : styles["content"]
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["backed-by-section"]}>
          <div className={styles["heading"]}>Backed By</div>
          <div className={styles["image-wrapper"]}>
            <img
              src={googleLogo}
              alt="googleLogo"
              className={styles["google-logo"]}
            />
            <img
              src={techStarsLogo}
              alt="techstars"
              className={styles["techstars-logo"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
