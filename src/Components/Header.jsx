import React from "react";
import Logo from "../Assets/gritly.svg";
import styles from "../Stylesheets/header.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import GenericModal from "./Reusables/GenericModal";
import HeaderMenu from "./Reusables/HeaderMenu";
const headerMenu = [
  {
    key: "home",
    label: "Home",
    selected: true,
    route: "/",
  },
  {
    key: "companies",
    label: "Companies",
    selected: false,
    route: "/employer",
  },
  {
    key: "bootcamps",
    label: "Bootcamp",
    selected: false,
    route: "/bootcamp",
  },
  {
    key: "candidate",
    label: "Candidate",
    selected: false,
    route: "/candidate",
  },
  {
    key: "contact",
    label: "Contact",
    selected: false,
    route: "/contactus",
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
            Signup
          </Button>
        </a>
      </div>
      <div className={styles["header-menu"]}>
        <HeaderMenu headerMenu={menu} />
      </div>
      <GenericModal open={open} handleClose={handleClose} option={option} />
    </div>
  );
}
