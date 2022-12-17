import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MySlider from "../../inputs/MySlider";

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
      <Box>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Min negativa automatiska tanke var:
          </Typography>
          <TextField
            variant="outlined"
            id="MinTanke"
            label="Jag tänkte..."
            value={formData.tanke ? formData.tanke : ""}
            sx={{ width: { xs: "100%", sm: "75%" } }}
            autoComplete="off"
            autoFocus
            onChange={(e) => {
              setFormData({
                ...formData,
                tanke: e.target.value,
              });
            }}
          />
        </Box>{" "}
        <MySlider
          question={"Hur mycket tror du på tanken?"}
          setFormData={setFormData}
          forLabel={formData.troPaTanke}
          setFunction={setFunction}
          valueLabels={["Inte alls", "Fullt ut"]}
          value={formData.troPaTanke ? formData.troPaTanke : 50}
        />
      </Box>
    </>
  );
}

export default Step1;
