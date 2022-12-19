import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function SlidersFromArray({
  // sliderArr är den ARR som ska visa silders och den arrn där svaret sparas som .value
  sliderArr,
  setSliderArr,
  question,
  placeholderText,
  labelMax,
  labelMin,
  setgotAwnser,
}) {
  const getIndex = (id) => {
    const i = sliderArr.findIndex((e) => e.id === id);
    return i;
  };

  const onChange = ({ id, value }) => {
    const updatedAnwserArr = [...sliderArr];
    const i = getIndex(id);

    /* Kollar så att det finns ett value för alla svarsobjekt */
    let gotAllAwnsers = updatedAnwserArr.every((obj) =>
      obj.hasOwnProperty("value")
    );
    console.log(gotAllAwnsers);

    if (gotAllAwnsers) setgotAwnser(true);

    if (i === -1) {
      console.log("något blev tokigt");
    } else {
      updatedAnwserArr[i].value = value;
    }
    setSliderArr(updatedAnwserArr);
    console.log(updatedAnwserArr);
  };

  return (
    <Box sx={{ mb: 10, mt: 3, textAlign: "center" }}>
      {sliderArr.length > 0 ? (
        <Typography variant="h6"> {question} </Typography>
      ) : null}
      {sliderArr.length > 0 ? (
        sliderArr.map((item, index) => (
          <Box key={`custom-box-${item.id}`} id={`custom-box-${item.id}`}>
            <Typography> {item.name} </Typography>
            <Typography sx={{ opacity: "50%" }}>
              {sliderArr[index].value
                ? sliderArr[index].value +
                  "/100" /* sliderArr[index].value + "/100" */
                : "-/100"}
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
              justifyContent={"center"}
            >
              <Typography sx={{ fontSize: "0.7rem" }}>
                {labelMin ? labelMin : "0"}
              </Typography>
              <Slider
                defaultValue={50}
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                key={item.id}
                id={item.id.toString()}
                sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
                onChange={(e) =>
                  onChange({
                    value: e.target.value,
                    id: item.id,
                  })
                }
              />
              <Typography sx={{ fontSize: "0.7rem" }}>
                {labelMax ? labelMax : "100"}
              </Typography>
            </Stack>
          </Box>
        ))
      ) : (
        <Typography> {placeholderText ? placeholderText : null}</Typography>
      )}
    </Box>
  );
}

export default SlidersFromArray;
