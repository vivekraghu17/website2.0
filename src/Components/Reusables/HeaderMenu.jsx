import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
export default function HeaderMenu(props) {
  const [menu, setMenu] = React.useState(props.headerMenu);
  const handleMenu = (key) => {
    menu.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    setMenu(menu);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu?.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                navigate(`${item.route}`);
                handleMenu(item.key);
              }}
              sx={{ background: `${item.selected ? "#0e1555" : "white"}` }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{ color: `${item.selected ? "white" : "#0e1555"} ` }}
                >
                  {item.key === "home" && <HomeIcon />}
                  {item.key === "companies" && <BusinessIcon />}
                  {item.key === "bootcamps" && <SchoolIcon />}
                  {item.key === "candidate" && <PersonIcon />}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  sx={{ color: `${item.selected ? "white" : "#0e1555"} ` }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "white" }}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
