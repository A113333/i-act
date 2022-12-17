import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Feelings from "../../Verktyg/Feelings";
import MultiChoiceFromArray from "../../inputs/MultiChoiceFromArray";
import SlidersFromArray from "../../inputs/SlidersFromArray";

function Step2({ formData, setFormData, setIsDone }) {
  useEffect(() => {
    if (formData.kanslorUnder.length !== 0) {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  const formDataSetter = (data) => {
    setFormData({
      ...formData,
      kanslorUnder: data,
    });
  };

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
        setFormData={formDataSetter}
        formData={formData}
        setIsDone={setIsDone}
      />

      {formData.kanslorUnder.length > 0 && (
        <SlidersFromArray sliderArr={formData.kanslorUnder} />
      )}
    </>
  );
}

export default Step2;
