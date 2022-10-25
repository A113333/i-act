import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function ThereBoxes() {
  return (
    <Grid container spacing={0} sx={{ margin: "auto", mt: 10, width: "80%" }}>
      <Grid xs={12} sm={4}>
        <Box sx={{ backgroundColor: "customGrey.light", p: 3 }}>
          <Typography variant="h5">Anpassat till dig</Typography>

          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ."
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} sm={4}>
        <Box sx={{ backgroundColor: "customWhite.main", p: 3 }}>
          <Typography variant="h5">Modern terapi</Typography>
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ."
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} sm={4}>
        <Box sx={{ backgroundColor: "customGrey.light", p: 3 }}>
          <Typography variant="h5">I ditt tempo</Typography>

          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. ."
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ThereBoxes;
