import React from "react";
import styles from "../Stylesheets/contactUs.module.scss";
import contactUsImage from "../Assets/contactusimage.png";
import { FormControl, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export default function ContactUs() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["header-banner"]}>
        <div className={styles["header"]}>Contact Us</div>
      </div>
      <div className={styles["form-section"]}>
        <div className={styles["left-side-image"]}>
          <img src={contactUsImage} alt="contactus" />
        </div>
        <div className={styles["right-side-form"]}>
          <div className={styles["form-control"]}>
            <div className={styles["name-section"]}>
              <div className={styles["first-name"]}>
                <label>First Name</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="First Name"
                />
              </div>
              <div className={styles["second-name"]}>
                <label>Last Name</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className={styles["contact-section"]}>
              <div className={styles["email"]}>
                <label>Email</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className={styles["phone-no"]}>
                <label>Phone number</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className={styles["topic-section"]}>
              <FormControl fullWidth>
                <label>Choose a topic</label>

                <Select
                  placeholder="select program"
                  className={styles["select-element"]}
                  //   sx={{ width: "500px", height: "48px" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles["message-section"]}>
              <label>Message</label>
              <TextField
                inputProps={{
                  style: {
                    height: "100px",
                  },
                }}
                variant="outlined"
                placeholder="Type your message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
