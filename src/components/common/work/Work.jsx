//import React from "react";
//import "./Styles.css";
//
//export default function Projects() {
//  return (
//    <>
//      <div className="portfolio-block">
//        <section id="portfolio">
//          <h5>PROJECTS</h5>
//        </section>
//        <p>
//
//        </p>
//      </div>
//    </>
//  );
//}
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Work() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="work-block">
        <section id="work">
          <h5>EXPERIENCE</h5>
        </section>
        <p></p>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "rgb(162, 169, 151)",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          textColor="neutral"
          TabIndicatorProps={{
            style: { background: "#f6efe0", colorScheme: "white" },
          }}
          sx={{ borderRight: 1, borderColor: "black" }}
        >
          <Tab label="Netapp" {...a11yProps(0)} />
          <Tab label="Coast Guard" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          • Perform stress and functional tests on arrays and hosts to determine
          their capabilities under certain tasks.
          <br />
          • Execute tasks that require the use of Linux (SLES and Redhat) and
          Windows.
          <br />
          • Use of repositories to access open-source code for updating firmware
          and/or correcting scripts.
          <br />
          • Physically set up and cable configurations of various arrays and
          servers.
          <br />
          • Run scripts to challenge the competence of different protocols such
          as Infiniband, SAS, Ethernet, and Fibre Channel.
          <br />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </>
  );
}
