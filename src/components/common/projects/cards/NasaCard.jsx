import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function NasaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://trackiss.com/">
        <CardMedia
          component="img"
          height="140"
          image="/images/nasa-hackathon.jpg"
          alt="hackathon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NASA Hackathon 2022
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This fun challenge was completed within 48 hours by a team of five.
            This app is to show a user where the ISS is in real time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href="https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/details"
          size="small"
          sx={{ color: "#1D1D1F" }}
        >
          Challenge
        </Button>
        <Button
          href="https://github.com/NASA-Spaceapps-challenjours/iss-webapp"
          size="small"
          sx={{ color: "#1D1D1F" }}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
