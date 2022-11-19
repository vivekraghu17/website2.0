import React from "react";
import styles from "../Stylesheets/footer.module.scss";
import logo from "../Assets/gritly.png";
import { useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const menuOptions = [
  {
    key: "home",
    label: "HOME",

    route: "/",
  },
  {
    key: "companies",
    label: "COMPANIES",

    route: "/employer",
  },
  {
    key: "bootcamps",
    label: "BOOTCAMPS",

    route: "/bootcamp",
  },
  {
    key: "candidate",
    label: "CANDIDATE",

    route: "/candidate",
  },
  {
    key: "contact",
    label: "CONTACT US",

    route: "/contactus",
  },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles["main-div"]}>
      <div className={styles["logo-section"]}>
        <img src={logo} alt="gritly" className={styles["logo"]} />
      </div>
      <div className={styles["menu-items-section"]}>
        {menuOptions.map((item, key) => {
          return (
            <div
              className={styles["item"]}
              key={key}
              onClick={() => {
                navigate(`${item.route}`);
                window.scrollTo(0, 0);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={styles["divider"]} />
      <div className={styles["copyrights-section"]}>
        <div className={styles["left-side-section"]}>
          © 2022 Gritly. All rights reserved
        </div>
        <div className={styles["social-media-wrapper"]}>
          <FacebookRoundedIcon sx={{ color: "white", cursor: "pointer" }} />
          <TwitterIcon
            sx={{ color: "white", marginLeft: "30px", cursor: "pointer" }}
          />
          <InstagramIcon
            sx={{ color: "white", marginLeft: "30px", cursor: "pointer" }}
          />
          <LinkedInIcon
            sx={{ color: "white", marginLeft: "30px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
