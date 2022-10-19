import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import "./Experience.css";

export default function WorkTimeline() {
  const head1 = {
    color: "#F2E6CE",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "5px",
    fontFamily: "Amethysta",
  };
  const head2 = {
    color: "#593325",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Amethysta",
  };
  const description = {
    color: "#606362",
    fontSize: "18px",
    fontWeight: "normal",
    fontFamily: "Amethysta",
  };

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} {...head1}>
          MARYLAND
          <br />
          FEB 2017 - FEB 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "#F2E6CE" }} variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>U.S. COAST GUARD</Typography>
          <Typography {...head2}>FIREMAN</Typography>
          <Typography {...description}>
            Patrolled islands for unusual incidents and safety hazards as a
            Boarding Team Member, trained use of 9MM pistol and OC pepper Spray.
            Purchase procurement liaison for all transaction on base. Qualified
            watchstander monitoring active communication with vessels underway
            via VHF-FM radio, skilled to decipher distress calls from the rest.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} {...head1}>
          LOUISIANA
          <br /> FEB 2019 - MAR 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "#F2E6CE" }} variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>UNITED STATES COAST GUARD</Typography>
          <Typography {...head2}>
            YEOMAN, <br />
            PETTY OFFICER THIRD CLASS
            <Typography {...description}>
              Certified in personnel management, communications, and computer
              applications. 40+ hours a week actively on a computer. Completed
              Apprentice Leadership Program being able to identify stress
              factors, influence others, and support an environment of respect
              as a supervisor. Provided customer service to employees regarding
              performance measurement, appraisal, promotion, and separation.
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} {...head1}>
          KANSAS
          <br />
          NOV 2021 – AUG 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "#F2E6CE" }} variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>NETAPP</Typography>
          <Typography {...head2}>
            EXECUTION, <br /> STUDENT CONTRACTOR
          </Typography>
          <Typography {...description}>
            Perform stress and functional tests on arrays and hosts to determine
            their capabilities under certain tasks. Execute tasks that require
            the use of Linux (SLES and Redhat) and Windows. Use of repositories
            to access open-source code for updating firmware and/or correcting
            scripts.Physically set up and cable configurations of various arrays
            and servers. Run scripts to challenge the competence of different
            protocols such as Infiniband, SAS, Ethernet, and Fibre Channel.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} {...head1}>
          KANSAS
          <br />
          AUG 2022 – PRESENT
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "#F2E6CE" }} variant="outlined">
            <WorkIcon sx={{ color: "#8AB39F" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>NETAPP</Typography>
          <Typography {...head2}>
            AUTOMATION, <br />
            STUDENT CONTRACTOR
            <Typography {...description}>
              Web development using React, Docker, and Django. Applied knowledge
              on database configuration to construct a website that is
              beneficial for a team.
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
