import { Box, Typography } from "@mui/material";
import React from "react";

function OvningarHelperText({ desc, exampel }) {
  return (
    <Box sx={{ mb: 2, mt: 2 }}>
      <Typography>{desc}</Typography>
      <Typography sx={{ mt: 1, opacity: "75%", fontSize: "0.9rem" }}>
        {exampel}
      </Typography>
    </Box>
  );
}

export default OvningarHelperText;
