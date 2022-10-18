import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";

export default function Contact() {
  const [isEmail, setEmail] = useState(false);

  return (
    <>
      <section id="contact">
        <h5>CONTACT</h5>
        <div className="row contact-block">
          <h2 className="con">Chat with me</h2>
          <p>
            Thank you for visiting my website, I hope you enjoyed a little bit
            about me. <br />I would love to hear from you! Please contact me at
            anytime.
          </p>
          <a
            href="https://www.google.com/maps/place/Kansas/@38.4773789,-100.5634517,7z/data=!3m1!4b1!4m5!3m4!1s0x87a31771717c016b:0x68c2b4a94b3e095f!8m2!3d39.011902!4d-98.4842465"
            alt="location"
          >
            <IconButton aria-label="location">
              <Tooltip title="Current Location" placement="bottom" arrow>
                <LocationOnIcon
                  sx={{
                    "&:hover": { color: "#8AB39F" },
                    color: "#F2E6CE",
                    fontSize: 46,
                  }}
                />
              </Tooltip>
            </IconButton>
          </a>
          <IconButton aria-label="email">
            <Tooltip title="Email" placement="bottom" arrow>
              <EmailIcon
                sx={{
                  "&:hover": { color: "#8AB39F" },
                  color: "#F2E6CE",
                  fontSize: 46,
                }}
              />
            </Tooltip>
          </IconButton>
          <a href="https://github.com/rsoza" alt="git">
            <IconButton aria-label="git">
              <Tooltip title="GitHub" placement="bottom" arrow>
                <GitHubIcon
                  sx={{
                    "&:hover": { color: "#8AB39F" },
                    color: "#F2E6CE",
                    fontSize: 46,
                  }}
                />
              </Tooltip>
            </IconButton>
          </a>
        </div>
      </section>
    </>
  );
}
