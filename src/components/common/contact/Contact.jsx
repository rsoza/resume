import React from "react";
import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export default function Contact() {
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
          <IconButton aria-label="location" sx={{}}>
            <LocationOnIcon
              sx={{
                "&:hover": { color: "#8AB39F" },
                color: "#F2E6CE",
                fontSize: 46,
              }}
            />
          </IconButton>
          <IconButton aria-label="email" sx={{}}>
            <EmailIcon
              sx={{
                "&:hover": { color: "#8AB39F" },
                color: "#F2E6CE",
                fontSize: 46,
              }}
            />
          </IconButton>
          <IconButton aria-label="git" sx={{}}>
            <GitHubIcon
              sx={{
                "&:hover": { color: "#8AB39F" },
                color: "#F2E6CE",
                fontSize: 46,
              }}
            />
          </IconButton>
        </div>
      </section>
    </>
  );
}
