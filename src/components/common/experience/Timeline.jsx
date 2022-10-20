import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import StorageIcon from "@mui/icons-material/Storage";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
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
            <DirectionsBoatFilledIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>U.S. COAST GUARD</Typography>
          <Typography {...head2}>FIREMAN</Typography>
          <Typography {...description}>
            Experienced life on a small boat as a boat crewman helping the
            community of Crisfield maintain a safe commute through the Tangier
            Sound. Adapting to my environment became second nature.
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
            <Diversity3Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>UNITED STATES COAST GUARD</Typography>
          <Typography {...head2}>
            YEOMAN, <br />
            PETTY OFFICER THIRD CLASS
            <Typography {...description}>
              Worked on a team of professionals specializing in administrative
              services that focuesd on pay having monthly sprints. Maintained
              reports and prepared 100+ personal records.
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
            <StorageIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography {...head1}>NETAPP</Typography>
          <Typography {...head2}>
            EXECUTION, <br /> STUDENT CONTRACTOR
          </Typography>
          <Typography {...description}>
            Run stress daily on a configuration of two Arrays and three Hosts,
            each having different platforms. Configure servers to the
            appropriate IP address and DNS. Look for defects by utilizing Linux
            platforms such as RHEL and SLES to execute tasks that customers are
            expected to perform.
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
