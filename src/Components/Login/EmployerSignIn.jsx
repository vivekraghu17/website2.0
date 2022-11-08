import React from "react";
import styles from "../../Stylesheets/Login/employerSignIn.module.scss";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import googleLogo from "../../Assets/google-logo-colors.png";
import ForgotPasswordModal from "../Reusables/ForgotPasswordModal";

export default function EmployerSignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles["main-div"]}>
      <div className={styles["form-header-wrapper"]}>
        <div className={styles["heading"]}>Employer Sign In</div>
        <div className={styles["sub-heading"]}>
          Sign in below to access your account.
        </div>
      </div>
      <div className={styles["form-wrapper"]}>
        <FormControl variant="outlined" className={styles["form-control"]}>
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
          <TextField
            id="outlined-adornment-password"
            variant="standard"
            className={styles["input-field"]}
            classes={{
              root: styles["outline-root"],
              notchedOutline: styles["notched-outline-root"],
              input: styles["user-input-field"],
            }}
            placeholder={"Enter your password"}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    className={styles["password-toggle-icon"]}
                    classes={{
                      root: styles["icon-button-root"],
                    }}
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label={
              <div style={{ display: "flex", flexDirection: "row" }}>
                <LockOpenIcon />
              </div>
            }
          />
          <div className={styles["forgot-password-section"]}>
            <div className={styles["remember-me-section"]}>
              <Checkbox sx={{ "&.Mui-checked": { color: " #0F175B" } }} />{" "}
              Remember me
            </div>
            <div className={styles["forgot-password"]} onClick={handleOpen}>
              Forgot Password?
            </div>
          </div>
        </FormControl>
        <Button className={styles["submit-btn"]}>Next</Button>
      </div>
      <div className={styles["or-login-with"]}>or login with</div>
      <div className={styles["google-section"]}>
        <Button className={styles["sign-in-with-google"]}>
          <img
            src={googleLogo}
            alt="google"
            className={styles["google-logo"]}
          />
          Continue with Google
        </Button>
      </div>
      <div className={styles["sign-up-section"]}>
        <div className={styles["dont-have-account"]}>
          Dont have an account ?
        </div>
        <div
          className={styles["sign-up"]}
          onClick={() => {
            navigate("/employersignup");
          }}
        >
          Signup
        </div>
      </div>
      <ForgotPasswordModal open={open} handleClose={handleClose} />
    </div>
  );
}
