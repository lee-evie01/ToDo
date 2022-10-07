import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiTextfield from "./MuiTextfield";
// import MuiDate from './MuiDate';
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MuiCard() {
  const [create, setCreate] = useState("");
  const [val, setVal] = useState("");

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Title
        </Typography>
        <MuiTextfield onChange={(e) => setVal(e.target.value)} val={val} />

        <br></br>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Tags
        </Typography>
        <MuiTextfield />
        <Button size="small">Add</Button>
        <br></br>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Due Date
        </Typography>
        <MuiTextfield />

        <br />
        <Button onClick={() => setCreate(val)}>Create</Button>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
