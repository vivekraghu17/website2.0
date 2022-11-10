import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListIcon from "@mui/icons-material/List";
import { useNavigate } from "react-router-dom";
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
    label: "Bootcamps",
    selected: false,
    route: "/bootcamp",
  },
  {
    key: "candidate",
    label: "Candidate",
    selected: false,
    route: "/candidate",
  },
];
export default function HeaderMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ListIcon sx={{ color: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ color: "#0e1555" }}
      >
        {headerMenu.map((item, key) => {
          return (
            <MenuItem
              key={key}
              sx={{ color: "#0e1555" }}
              onClick={() => {
                navigate(`${item.route}`);
                handleClose();
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
