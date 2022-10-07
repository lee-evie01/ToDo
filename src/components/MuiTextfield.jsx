import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MuiTextfield({ onChange, val }) {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      sx={{
        "& > :not(style)": { m: 0.01, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField
        id="standard-basic"
        label=" "
        variant="standard"
        onChange={onChange}
        val={val}
      />

      {/* <input value = {val} onChange ={(e)=>{setVal(e.target.value)}} /> */}
    </Box>
  );

  console.log(val);
}
