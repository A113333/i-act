import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

function CircularProgress() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        left: "100%",
        top: 0,
      }}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size="5rem"
        thickness={4}
        sx={{ color: "grey" }}
      />
      <CircularProgress
        color="secondary"
        variant="determinate"
        disableShrink
        sx={{ position: "absolute", left: 0, strokeLinecap: "round" }}
        size="5rem"
        thickness={4}
        value={50}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div">
          1 av 11
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgress;
