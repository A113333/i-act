import React, { useState } from "react";
//import { ReactComponent as BlueGreenBrain } from "../img/blueGreenBrain.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

// let BrainImg = BlueGreenBrain;

function HeroSection() {
  const buttonFits = useMediaQuery("(min-width:380px)");
  const [slide, setslide] = useState(true);
  return (
    <div>
      <Box className="arrow-right"></Box>
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "customWhite.main",
          minHeight: "80vh",
          borderRadius: " 0px 0px 40px 40px",
        }}
      >
        <Grid xs={12} sm={2}></Grid>

        <Grid xs={12} sm={8}>
          <Box
            sx={{
              mt: 10,
              mb: 15,
              textAlign: "center",
              backgroundSize: "100%",
              backgroundRepeat: "none",

              alignItems: "center",
            }}
          >
            <Typography
              color="primary"
              display="inline"
              sx={{
                mt: "calc(50vh - 175px)",
                fontSize: "115px",
                fontFamily: "comfortaa",
                mb: 2,
                fontWeight: "100",
                lineHeight: "100px",
                /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */
                display: "span",
              }}
            >
              i-act.
            </Typography>

            <Divider>
              <Button component={Link} to="/verktyg" variant="outlined">
                <Typography
                  display="inline"
                  sx={{
                    fontFamily: "comfortaa",
                    fontSize: buttonFits ? "1.3rem" : "0.9rem",
                    clear: "both",
                    fontWeight: "100",
                    opacity: "50%",
                  }}
                >
                  digitala
                </Typography>
                <Typography
                  display="inline"
                  sx={{
                    fontSize: buttonFits ? "1.3rem" : "0.9rem",
                    fontFamily: "comfortaa",

                    clear: "both",
                    fontWeight: "100",
                  }}
                >
                  verktyg för psykologer
                </Typography>
              </Button>
            </Divider>

            {/* <Box sx={{ mt: 1 }}>
              <Button variant="text">skapa konto</Button>
              <Button variant="outlined">logga in</Button>
            </Box> */}
          </Box>
        </Grid>

        <Grid xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
