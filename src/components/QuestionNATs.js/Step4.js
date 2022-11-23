import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TextFieldWithAdd from "../inputs/TextFieldWithAdd";

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
