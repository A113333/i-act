import React, { useState } from "react";
import { Slider, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

function MySlider({ forLabel, question, setFunction, id, valueLabels, value }) {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {" "}
        {question}
      </Typography>
      <Typography sx={{ opacity: "50%" }}>
        {" "}
        {!forLabel ? "-/100" : forLabel + "/100"}
      </Typography>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        v
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography> {valueLabels ? valueLabels[0] : "0"} </Typography>
        <Slider
          defaultValue={50}
          value={value ? value : 50}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={100}
          sx={{ width: { xs: "100%", sm: "50%" } }}
          onChange={(e) => {
            setFunction(e);
          }}
        />
        <Typography> {valueLabels ? valueLabels[1] : "100"} </Typography>
      </Stack>
    </>
  );
}

export default MySlider;
