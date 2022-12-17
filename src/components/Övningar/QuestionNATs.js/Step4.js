import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextFieldWithAdd from "../../inputs/TextFieldWithAdd";

function Step4({ setFormData, setIsDone, formData }) {
  return (
    <>
      <TextFieldWithAdd
        inputName={"bevisForTanke"}
        setFormData={setFormData}
        setIsDone={setIsDone}
        formData={formData}
        questionText={"Vilka bevis har du för din tanke?"}
        label={"bevis"}
      />
      <Box>
        <Typography></Typography>
      </Box>
    </>
  );
}

export default Step4;
