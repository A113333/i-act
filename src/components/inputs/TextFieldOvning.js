import { Box, Typography, TextField } from "@mui/material";
import React from "react";

function TextFieldOvning({ question, value, label, onChange, isMultiLine }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {question}
      </Typography>
      <TextField
        multiline={isMultiLine}
        rows={isMultiLine ? 4 : null}
        variant="outlined"
        id="MinTanke"
        label={label}
        value={value ? value : ""}
        sx={{ width: "100%", m: "auto" }}
        autoComplete="off"
        autoFocus
        onChange={onChange}
      />
    </Box>
  );
}

export default TextFieldOvning;
