import React from "react";
import { ReactComponent as BlueGreenBrain } from "../img/blueGreenBrain.svg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

let BrainImg = BlueGreenBrain;

function heroSection() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "customWhite.main",

          borderRadius: " 0px 0px 40px 40px",
        }}
      >
        <Grid xs={12} sm={2}></Grid>

        <Grid xs={12} sm={8}>
          <Box
            sx={{
              mt: 15,
              mb: 15,
              textAlign: "center",

              backgroundSize: "100%",
              backgroundRepeat: "none",

              alignItems: "center",
            }}
          >
            <Typography
              color="secondary"
              sx={{
                fontSize: {
                  sm: "128px",
                  xs: "100px",
                },
                fontFamily: "comfortaa",
                m: 0,
                fontWeight: "100",
                lineHeight: "100px",
                display: "span",
              }}
            >
              i-act.
            </Typography>

            <Typography
              sx={{
                fontFamily: "comfortaa",
                fontSize: { sm: "24px", xs: "16px" },
                clear: "both",
                fontWeight: "100",
              }}
            >
              moderna lösningar på gammla problem
            </Typography>
            {/* <Box sx={{ mt: 1 }}>
              <Button variant="text">skapa konto</Button>
              <Button variant="outlined">logga in</Button>
            </Box> */}
          </Box>
        </Grid>

        <Grid xs={12} sm={2}></Grid>
      </Grid>

      <Box sx={{ pt: 4, width: "80%", margin: "auto" }}>
        <Typography variant="h5">Vad vi erbjuder</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>

        <Button variant="contained" sx={{ float: "right", mt: 3, p: 1 }}>
          börja nu
        </Button>
      </Box>

      {/* <Box sx={{ textAlign: "center", mt: 15, widht: "100%" }}>
        <BrainImg width={"70px"} height={"70px"} />
      </Box> */}
    </div>
  );
}

export default heroSection;
