import React from "react";
import styles from "../Stylesheets/home.module.scss";

import Button from "@mui/material/Button";
import live from "../Assets/live.png";
import guywithlaptop from "../Assets/guy-with-laptop.png";
import dailyTask from "../Assets/dailytask.png";
import StudentOption from "./Reusables/StudentOption";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import talkToSpecialistBanner from "../Assets/talk-to-specialist-banner.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import EmployerOption from "./Reusables/EmployerOption";
import BootcampOption from "./Reusables/BootcampOption";
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
  },
  {
    key: "2",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Emilia Tadashi",
    designation: "Highschool Student",
  },
  {
    key: "3",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
  },
  {
    key: "4",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Marvin McKinney",
    designation: "Student Of STM",
  },
  {
    key: "5",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Emilia Tadashi",
    designation: "Highschool Student",
  },
  {
    key: "6",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
  },
  {
    key: "7",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
  },
  {
    key: "8",
    review:
      "“With my jarbel ranking increasing rapidly, the easy way of delivery given by the mentor made me understand more quickly.”",
    username: "Esther Howard",
    designation: "Multimedia Enthusiast",
  },
];
const faq = [
  {
    key: "1",
    question: "Laborum magna nulla",
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
export default function Home() {
  const [options, setOptions] = React.useState(optionView);
  const [menu, setMenu] = React.useState("employer");
  const ref = React.useRef(null);
  const [doc, setDocument] = React.useState();
  React.useEffect(() => {
    const box = document.querySelector("#cardmap");
    setDocument(box);
  }, []);

  const previousAction = () => {
    const width = doc.clientWidth;
    doc.scrollLeft = doc.scrollLeft - width;
  };
  const nextAction = () => {
    const width = doc.clientWidth;
    doc.scrollLeft = doc.scrollLeft + width;
  };
  const handleOption = (key) => {
    options.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    console.log(key);
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
        <div className={styles["information"]}>
          {menu === "employer" && <EmployerOption />}
          {menu === "bootcamp" && <BootcampOption />}
          {menu === "students" && <StudentOption />}
        </div>
        <div className={styles["learn-more-section"]}>
          <Button className={styles["learn-more-btn"]}>Learn More</Button>
        </div>
      </div>
      <div className={styles["candidate-review-section"]}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["heading"]}>What our Candidates say</div>
        </div>
        <div className={styles["button-wrapper"]}>
          <Button className={styles["previous"]} onClick={previousAction}>
            <ArrowBackIcon />
          </Button>
          <Button className={styles["next"]} onClick={nextAction}>
            <ArrowForwardIcon />
          </Button>
        </div>
        <div className={styles["review-wrapper"]} id="cardmap" ref={ref}>
          {candidateReviews.map((item, key) => {
            return (
              <div className={styles["card"]} key={key}>
                <div className={styles["review"]}>{item.review}</div>
                <div className={styles["username"]}>{item.username}</div>
                <div className={styles["designation"]}>{item.designation}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <img src={talkToSpecialistBanner} alt="banner" />
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
      </div>
    </div>
  );
}
