import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Stack } from "@mui/material";

export default function ActionAreaCard(props) {
  function removeHandler(e) {
    fetch(`http://localhost:8000/remove/${e.target.dataset.id}`, {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          alert("An error occured");
        }
        if (data.message) {
          alert("Destination Removed");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 3 }}>
      <CardActionArea>
        <p
          style={{
            textAlign: "right",
            right: "5px",
            top: "5px",
            position: "absolute",
            marginRight: "3px",
            fontWeight: "bolder",
            color: "white",
            fontSize: "15px",
          }}
          onClick={removeHandler}
          data-id={props.data}
        >
          X
        </p>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
          <Stack direction="row" justifyContent="space-between" marginTop={1}>
            <Button variant="contained" sx={{ padding: "4px" }}>
              See more
            </Button>
            <Button variant="outlined" sx={{ padding: "4px" }}>
              Dates
            </Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
