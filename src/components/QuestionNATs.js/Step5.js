import { Typography } from "@mui/material";
import React from "react";
import MindTraps from "../Saker/MindTraps";

function Step5({ formData, setFormData, setIsDone }) {
  setIsDone(true);
  return (
    <Typography variant="h6">
      Innehåller din automatiska negativa tanke någon eller några tankefällor?
      <MindTraps setFormData={setFormData} formData={formData} />
    </Typography>
  );
}

export default Step5;
