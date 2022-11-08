import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../../Stylesheets/forgotPasswordModal.module.scss";
import photo from "../../Assets/forgot-password-banner.png";
import { Button, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";
export default function ForgotPasswordModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles["main-div"]}>
          <div className={styles["close-icon"]}>
            <CloseIcon onClick={props.handleClose} />
          </div>
          <div className={styles["content"]}>
            <div className={styles["left-side-image"]}>
              <img src={photo} alt="ladywalking" />
            </div>
            <div className={styles["right-side-form"]}>
              <div className={styles["form-header"]}>Forgot Password</div>
              <div className={styles["form-sub-heading"]}>
                Please enter your email address to request a password reset.
              </div>
              <TextField
                type="email"
                id="outlined-adornment-email"
                variant="standard"
                className={styles["input-field"]}
                classes={{
                  root: styles["outline-root"],
                  notchedOutline: styles["notched-outline-root"],
                  input: styles["user-input-field"],
                }}
                placeholder={"Enter your Email"}
                label={
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <MailOutlineIcon />
                  </div>
                }
              />
              <Button className={styles["next-btn"]}>Reset Password</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
