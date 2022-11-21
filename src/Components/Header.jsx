import React from "react";
import Logo from "../Assets/gritly.png";
import styles from "../Stylesheets/header.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import GenericModal from "./Reusables/GenericModal";
import HeaderMenu from "./Reusables/HeaderMenu";
const headerMenu = [
  {
    key: "home",
    label: "HOME",
    selected: true,
    route: "/",
  },
  {
    key: "companies",
    label: "COMPANIES",
    selected: false,
    route: "/employer",
  },
  {
    key: "bootcamps",
    label: "BOOTCAMPS",
    selected: false,
    route: "/bootcamp",
  },
  {
    key: "candidate",
    label: "CANDIDATE",
    selected: false,
    route: "/candidate",
  },
];

export default function Header() {
  const [menu, setMenu] = React.useState(headerMenu);
  const handleMenu = (key) => {
    menu.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    setMenu(menu);
  };
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState("");
  const handleOpen = (e) => {
    setOpen(true);
    setOption(e);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className={styles["main-div"]}>
      <div className={styles["logo-section"]}>
        <img
          src={Logo}
          alt="gritly-logo"
          className={styles["logo-image"]}
          onClick={() => {
            navigate("/");
            menu.forEach((item) => {
              if (item.key === "home") item.selected = true;
              else item.selected = false;
            });
            setMenu(menu);
          }}
        />
      </div>
      <div className={styles["menu-section"]}>
        {menu.map((item, key) => {
          return (
            <div
              key={key}
              className={`${styles["items"]} ${
                item.selected ? styles["selected"] : ""
              }`}
              onClick={() => {
                navigate(`${item.route}`);
                handleMenu(item.key);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={styles["user-options"]}>
        <Button
          className={styles["login-btn"]}
          onClick={() => {
            handleOpen("login");
          }}
        >
          Login
        </Button>
        <a href="https://app.gritly.us">
          <Button className={styles["register-btn"]} variant="outlined">
            Apply Now
          </Button>
        </a>
      </div>
      <div className={styles["header-menu"]}>
        <HeaderMenu />
      </div>
      <GenericModal open={open} handleClose={handleClose} option={option} />
    </div>
  );
}
