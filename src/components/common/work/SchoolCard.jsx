import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function SchoolCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="200"
            height="auto"
            image="/images/PBSC.png"
            alt="PBSC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              A.A. GENERAL GPA: 3.8
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Graduated May 2014
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <section id="school">
        <h5>EDUCATION</h5>
        <SchoolCard />
        <div class="images">
          <img class="resize" src="/images/PBSC.png" alt="PBSC" />
          <img class="resize" src="/images/WSU.png" alt="WSU" />
        </div>
        <body>
          WICHITA STATE UNIVERSITY B.S. IN COMPUTER SCIENCE GPA: 3.6 | Expected
          May 2023
          <br />
          PALM BEACH STATE COLLEGE A.A. GENERAL GPA: 3.8 | Graduated May 2014
        </body>
      </section>
    </>
  );
}
