import React from "react";
import styles from "../Stylesheets/contactUs.module.scss";
import contactUsImage from "../Assets/contactusimage.png";
import { Button, FormControl, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import workbright from "../Assets/PartnerImages/SVG/workbright.svg";
import sondermind from "../Assets/PartnerImages/SVG/sondermind.svg";
import google from "../Assets/PartnerImages/SVG/Google_for_Startups_logo.png";
import rpaLabs from "../Assets/PartnerImages/SVG/rpalabs.svg";
import salesforce from "../Assets/PartnerImages/SVG/salesforce.svg";
import skupos from "../Assets/PartnerImages/SVG/skupos.svg";
import misla from "../Assets/PartnerImages/SVG/misla.svg";
import community_college from "../Assets/PartnerImages/SVG/communityCollegeOfAurora.svg";
import energizeColorado from "../Assets/PartnerImages/SVG/energizeColorado.svg";
import inside_voice from "../Assets/PartnerImages/SVG/insidevoices.svg";
import gr8_insight from "../Assets/PartnerImages/SVG/gr8insight.svg";
import bedrock from "../Assets/PartnerImages/Bedrock-logo-purple-1.png";
import binti from "../Assets/PartnerImages/binti-logo2x.png";
const partnerImages = [
  {
    key: 1,
    img: workbright,
  },
  {
    key: 2,
    img: sondermind,
  },
  {
    key: 3,
    img: google,
  },
  {
    key: 4,
    img: rpaLabs,
  },
  {
    key: 5,
    img: salesforce,
  },
  {
    key: 6,
    img: skupos,
  },
  {
    key: 7,
    img: misla,
  },
  {
    key: 8,
    img: community_college,
  },
  {
    key: 9,
    img: energizeColorado,
  },
  {
    key: 10,
    img: inside_voice,
  },
  {
    key: 11,
    img: gr8_insight,
  },
  {
    key: 12,
    img: bedrock,
  },
  {
    key: 13,
    img: binti,
  },
];
export default function ContactUs() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["header-banner"]}>
        <div className={styles["header"]}>Contact Us</div>
        <div className={styles["image-wrapper"]}>
          {partnerImages.map((item) => {
            return (
              <div className={styles["image-wrapper-styles"]} key={item.key}>
                <div className={styles["image-wrapper-dummy-element"]}>
                  <img src={item.img} alt="partner-images" />
                </div>
              </div>
            );
          })}
        </div>
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
          <div className={styles["button-wrapper"]}>
            <Button className={styles["submit-btn"]}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
