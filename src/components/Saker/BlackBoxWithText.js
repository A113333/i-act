import { Box, Typography } from "@mui/material";
import React from "react";

function BlackBoxWithText({ text }) {
  return (
    <Box
      sx={{
        opacity: "60%",
      }}
    >
      <Typography variant="body1"> {text}</Typography>
    </Box>
  );
}

export default BlackBoxWithText;
