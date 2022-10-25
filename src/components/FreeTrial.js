import { Box, Button, Typography } from "@mui/material";
import React from "react";

function FreeTrial() {
  return (
    <Box
      color="primary"
      sx={{ backgroundColor: "primary.main", width: "80%", margin: "auto" }}
    >
      <Box sx={{ width: "80%", m: "auto", pt: 5, pb: 6, pb: 10 }}>
        <Typography color="customWhite.main" variant="h5">
          Testa livskartan
        </Typography>
        <Typography color="customWhite.main">
          "Här erbjuds ett grattis test av livskartan, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Här erbjuds ett grattis test av livskartan, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat"
        </Typography>

        <Button
          variant="contained"
          color="customWhite"
          sx={{
            mt: 3,
            float: "right",
          }}
        >
          testa nu
        </Button>
      </Box>
    </Box>
  );
}

export default FreeTrial;
