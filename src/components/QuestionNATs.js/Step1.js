import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";

function Step1({ formData, setFormData, setIsDone }) {
  useEffect(() => {
    if (formData.tanke !== "" && formData.troPaTanke !== "") {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

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
          sx={{ width: { xs: "100%", sm: "75%" } }}
          autoComplete="off"
          onChange={(e) => {
            setFormData({
              ...formData,
              tanke: e.target.value,
            });
          }}
          value={formData.tanke}
        />
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {" "}
          Hur mycket tror du på tanken?{" "}
        </Typography>
        <Typography sx={{ opacity: "50%" }}>
          {" "}
          {!formData.troPaTanke ? "-/100" : formData.troPaTanke + "/100"}
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1 }}
          v
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
            sx={{ width: { xs: "100%", sm: "50%" } }}
            onChange={(e) => {
              setFormData({
                ...formData,
                troPaTanke: e.target.value,
              });
            }}
          />
          <Typography> 100 </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Step1;
