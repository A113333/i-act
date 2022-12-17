import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function Step8({ setFormData, setIsDone, formData }) {
  useEffect(() => {
    if (formData.troPaTankeEfter !== "") {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography sx={{ mb: 2 }}>
          {" "}
          Hur mycket tror du på din tanke nu?{" "}
        </Typography>

        <Typography sx={{ opacity: "50%" }}>
          {" "}
          {!formData.troPaTankeEfter
            ? "-/100"
            : formData.troPaTankeEfter + "/100"}
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1 }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Typography> Inte alls </Typography>
          <Slider
            defaultValue={50}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
            sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
            onChange={(e) => {
              setFormData({
                ...formData,
                troPaTankeEfter: e.target.value,
              });
            }}
          />
          <Typography> Fullt ut </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Step8;
