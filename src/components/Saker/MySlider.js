import React, { useState } from "react";
import { Slider, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

function MySlider({ userInput, setUserInput, data }) {
  const addUserInput = (data) => {
    const updatedkansloIntensitet = [...userInput];
    updatedkansloIntensitet[data.index] = { id: data.index, value: data.value };
    setUserInput(updatedkansloIntensitet);
  };

  return (
    <Box id={`custom-box-${data.id}`}>
      {" "}
      <Typography> {data.lable} </Typography>{" "}
      <Typography sx={{ opacity: "50%" }}>
        {" "}
        {!userInput[data.id].value
          ? "-/100"
          : userInput[data.id].value + "/100"}
      </Typography>{" "}
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Typography> 0 </Typography>
        <Slider
          defaultValue={50}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={100}
          sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
          onChange={(e) =>
            addKansloIntensite({
              value: e.target.value,
              index: data.id,
            })
          }
        />
        <Typography> 100 </Typography>
      </Stack>
    </Box>
  );
}

export default MySlider;
