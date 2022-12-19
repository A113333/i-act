import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Feelings from "../../inputs/Feelings";
import MultiChoiceFromArray from "../../inputs/MultiChoiceFromArray";
import SlidersFromArray from "../../inputs/SlidersFromArray";

function Step2({ formData, setFormData, setIsDone }) {
  const [feelings, setfeelings] = useState([]);

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

      <Feelings setFormData={setfeelings} formData={feelings} />

      <SlidersFromArray
        setgotAwnser={setIsDone}
        sliderArr={feelings}
        setSliderArr={formDataSetter}
        question={"Hur intensiva var känslorna?"}
        labelMax={"Väldigt stark"}
        labelMin={"Knappt märkbar"}
      />
    </>
  );
}

export default Step2;
