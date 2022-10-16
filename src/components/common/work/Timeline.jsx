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
import "./Work.css";

export default function WorkTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="white"
        >
          MARYLAND
          <br />
          FEB 2017 - FEB 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "white" }} variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            UNITED STATES COAST GUARD
          </Typography>
          <Typography color="white">FIREMAN</Typography>
          <Typography variant="p" color="white">
            <br /> • Patrolled islands for unusual incidents and safety hazards
            as a Boarding Team Member, trained uses of 9MM pistol and OC pepper
            Spray.
            <br /> • Purchase procurement liaison for all transaction on base.
            <br /> • Qualified watchstander monitoring active communication with
            vessels underway via VHF-FM radio, skilled to decipher distress
            calls from the rest.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          LOUISIANA
          <br /> FEB 2019 – MAR 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "white" }} variant="outlined">
            <WorkOutlineIcon sx={{ color: "white" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            UNITED STATES COAST GUARD
          </Typography>
          <Typography color="white">
            YEOMAN PETTY OFFICER THIRD CLASS
            <Typography variant="p" color="white">
              <br />
              <br />• Certified in personnel management, communications, and
              computer applications.
              <br />• 40+ hours a week actively on a computer.
              <br />• Completed Apprentice Leadership Program being able to
              identify stress factors, influence others, and support an
              environment of respect as a supervisor.
              <br />• Provided customer service to employees regarding
              performance measurement, appraisal, promotion, and separation.
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="white"
        >
          KANSAS
          <br />
          NOV 2021 – AUG 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ color: "white" }} variant="outlined">
            <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            NETAPP
          </Typography>
          <Typography color="white">EXECUTION, STUDENT CONTRACTOR</Typography>
          <Typography variant="p" color="white">
            <br />• Perform stress and functional tests on arrays and hosts to
            determine their capabilities under certain tasks.
            <br />• Execute tasks that require the use of Linux (SLES and
            Redhat) and Windows.
            <br />• Use of repositories to access open-source code for updating
            firmware and/or correcting scripts.
            <br />• Physically set up and cable configurations of various arrays
            and servers.
            <br />• Run scripts to challenge the competence of different
            protocols such as Infiniband, SAS, Ethernet, and Fibre Channel.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          KANSAS
          <br />
          AUG 2022 – PRESENT
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ color: "red" }}>
          <TimelineConnector />
          <TimelineDot sx={{ color: "white" }} variant="outlined">
            <WorkIcon sx={{ color: "red" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            NETAPP
          </Typography>
          <Typography color="white">
            AUTOMATION, STUDENT CONTRACTOR
            <Typography variant="p" color="white">
              <br /> Web development using React, Docker, and Django.
            </Typography>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
