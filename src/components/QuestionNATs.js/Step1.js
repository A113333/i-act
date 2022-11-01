import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";
import MySlider from "../Saker/MySlider";

function Step1({ formData, setFormData, setIsDone }) {
  useEffect(() => {
    if (formData.tanke !== "" && formData.troPaTanke !== "") {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  const setFunction = (event) => {
    setFormData({
      ...formData,
      troPaTanke: event.target.value,
    });
  };

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6">
          Min negativa automatiska tanke var:
        </Typography>
        <TextField
          variant="outlined"
          id="MinTanke"
          label="Jag tänkte..."
          value={formData.tanke ? formData.tanke : null}
          sx={{ width: { xs: "100%", sm: "75%" } }}
          autoComplete="off"
          onChange={(e) => {
            setFormData({
              ...formData,
              tanke: e.target.value,
            });
          }}
        />
      </Box>

      <MySlider
        question={"Hur mycket tror du på tanken?"}
        setFormData={setFormData}
        forLabel={formData.troPaTanke}
        setFunction={setFunction}
        valueLabels={["Inte alls", "Fullt ut"]}
        value={formData.troPaTanke ? formData.troPaTanke : 50}
      />
    </>
  );
}

export default Step1;
