import { Typography } from "@mui/material";
import React from "react";
import MindTraps from "../Saker/MindTraps";

function Step5({ formData, setFormData, setIsDone }) {
  setIsDone(true);
  return (
    <>
      <Typography variant="h6" sx={{ pb: 2, fontWeight: "700" }}>
        Innehåller din automatiska negativa tanke någon eller några tankefällor?
      </Typography>
      <MindTraps setFormData={setFormData} formData={formData} />
    </>
  );
}

export default Step5;