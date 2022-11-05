import { TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";

function Step6({ setFormData, setIsDone, formData }) {
  useEffect(() => {
    if (formData.balanseradTanke !== "") {
      setIsDone(true);
    }
  }, [formData, setIsDone]);

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Vad skulle kunna vara en alternativ mer balanserad/realistisk tanke?
        </Typography>

        <TextField
          variant="outlined"
          id="AlternativTanke"
          label="Min alternativa tanke"
          sx={{ width: { xs: "100%", sm: "75%" } }}
          autoComplete="off"
          autoFocus
          value={formData.balanseradTanke ? formData.balanseradTanke : null}
          onChange={(e) => {
            setFormData({
              ...formData,
              balanseradTanke: e.target.value,
            });
          }}
        />
      </Box>

      <Typography variant="h6">
        {formData.tankeFallor
          ? ""
          : "Då din tanke innehöll tankefällan" +
            formData.tankeFallor[0].name +
            "kanske du hade varit hjälpt av tankestrategien heeh"}
      </Typography>
    </>
  );
}

export default Step6;
