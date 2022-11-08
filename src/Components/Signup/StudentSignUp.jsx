import React from "react";
import styles from "../../Stylesheets/Signup/studentSignUp.module.scss";
import FormControl from "@mui/material/FormControl";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
export default function StudentSignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles["main-div"]}>
      <div className={styles["form-header-wrapper"]}>
        <div className={styles["heading"]}>Candidate Sign Up</div>
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
            id="outlined-adornment-confirm-password"
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
          <TextField
            id="outlined-adornment-password"
            variant="standard"
            className={styles["input-field"]}
            classes={{
              root: styles["outline-root"],
              notchedOutline: styles["notched-outline-root"],
              input: styles["user-input-field"],
            }}
            placeholder={"Confirm your password"}
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
              *Password should contain at least one uppercase, lowercase, digit,
              symbol and minimum of 8 characters
            </div>
            <div className={styles["agreement-policy"]}>
              <Checkbox sx={{ "&.Mui-checked": { color: " #0F175B" } }} />
              By signing up, you agree to Company Terms of Service and Privacy
              Policy.
            </div>
          </div>
        </FormControl>
        <Button className={styles["submit-btn"]}>Sign Up</Button>
      </div>

      <div className={styles["sign-up-section"]}>
        <div className={styles["dont-have-account"]}>
          Already have an account ?
        </div>
        <div
          className={styles["sign-up"]}
          onClick={() => {
            navigate("/studentsignin");
          }}
        >
          Login In
        </div>
      </div>
    </div>
  );
}
