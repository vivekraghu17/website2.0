import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import styles from "../../Stylesheets/genericModal.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const profileOptions = [
  {
    key: "employer",
    label: "Employer",
    login: "/employersignin",
    signup: "/employersignup",
  },
  {
    key: "bootcamp",
    label: "Bootcamp",
    login: "/bootcampsignin",
    signup: "/bootcampsignup",
  },
  {
    key: "student",
    label: "Student",
    login: "/studentsignin",
    signup: "/studentsignup",
  },
];
export default function GenericModal(props) {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles["box"]}>
          <div className={styles["label-wrapper"]}>
            <Typography className={styles["label"]}>
              Select the profile which describes you.
            </Typography>
          </div>
          <div className={styles["options-wrapper"]}>
            {profileOptions.map((item, key) => {
              return (
                <Button
                  className={styles["option"]}
                  key={key}
                  onClick={() => {
                    if (props.option === "login") {
                      navigate(`${item.login}`);
                      props.handleClose();
                    } else if (props.option === "signup") {
                      navigate(`${item.signup}`);
                      props.handleClose();
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
