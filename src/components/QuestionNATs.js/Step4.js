import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function Step4({ setFormData, setIsDone, formData }) {
  useEffect(() => {
    if (formData.bevisForTanke !== "" && formData.bevisMotTanke !== "") {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {" "}
          Vilka bevis har du för att tanken stämmer?{" "}
        </Typography>
        <TextField
          variant="outlined"
          id="MinaBevis"
          label="Mina Bevis"
          autoComplete="off"
          sx={{ width: { xs: "100%", sm: "75%" } }}
          onChange={(e) => {
            setFormData({
              ...formData,
              bevisForTanke: e.target.value,
            });
          }}
        />
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {" "}
          Vilka argrument talar emot tanken?
        </Typography>
        <TextField
          variant="outlined"
          id="MinaMotbevis"
          label="Mina Motbevis"
          autoComplete="off"
          sx={{ width: { xs: "100%", sm: "75%" } }}
          onChange={(e) => {
            setFormData({
              ...formData,
              bevisMotTanke: e.target.value,
            });
          }}
        />
      </Box>
    </>
  );
}

export default Step4;
