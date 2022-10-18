import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ChecklistCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://github.com/rsoza/checklist_table">
        <CardMedia
          component="img"
          height="140"
          image="/images/checklist.JPG"
          alt="checklist"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Checklist in Python
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This Checklist was inspried by the incoming employees who had to
            work on hardware at Netapp. I created this for a 2 week sprint
            called Regression where hardware was updated.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href="https://github.com/rsoza/checklist_table"
          size="small"
          sx={{ color: "#1D1D1F" }}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
