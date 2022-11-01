import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

import Feelings from "../Saker/Feelings";

function Step2({ formData, setFormData, setIsDone }) {
  useEffect(() => {
    if (formData.kanslorUnder.length !== 0) {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  return (
    <>
      <Box sx={{ pt: 1 }}>
        <Typography variant="h6">
          {" "}
          Vilka känslor hade du i situationen?{" "}
        </Typography>
        <Typography variant="body1"> Välj en eller flera känslor </Typography>
      </Box>

      <Feelings
        setFormData={setFormData}
        formData={formData}
        setIsDone={setIsDone}
      />
    </>
  );
}

export default Step2;
