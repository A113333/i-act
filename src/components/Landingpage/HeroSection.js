import React, { useState } from "react";
//import { ReactComponent as BlueGreenBrain } from "../img/blueGreenBrain.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

// let BrainImg = BlueGreenBrain;

function HeroSection() {
  const buttonFits = useMediaQuery("(min-width:380px)");
  const [slide, setslide] = useState(true);
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={0}
        sx={{
          backgroundColor: "customWhite.main",
          minHeight: "80vh",
          borderRadius: " 0px 0px 40px 40px",
        }}
      >
        <Grid xs={12}>
          <Box
            sx={{
              mt: "calc(50vh - 175px)",
            }}
          >
            <Box
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={100}
              >
                <Typography
                  color="primary"
                  sx={{
                    fontSize: "115px",
                    fontFamily: "comfortaa",
                    mb: 2,
                    fontWeight: "100",
                    lineHeight: "100px",
                    /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */
                    display: "inline",
                  }}
                >
                  i
                </Typography>
              </AnimatedOnScroll>

              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={300}
              >
                <Typography
                  color="primary"
                  display="inline"
                  sx={{
                    fontSize: "115px",
                    fontFamily: "comfortaa",
                    mb: 2,
                    fontWeight: "100",
                    lineHeight: "100px",
                    /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */

                    display: "inline",
                  }}
                >
                  -
                </Typography>
              </AnimatedOnScroll>

              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={500}
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
                  }}
                >
                  a
                </Typography>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={700}
              >
                <Typography
                  color="primary"
                  display="inline"
                  sx={{
                    mt: "30vh",
                    fontSize: "115px",
                    fontFamily: "comfortaa",
                    mb: 2,
                    fontWeight: "100",
                    lineHeight: "100px",
                    /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */
                  }}
                >
                  c
                </Typography>
              </AnimatedOnScroll>

              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={900}
              >
                <Typography
                  color="primary"
                  display="inline"
                  sx={{
                    fontSize: "115px",
                    fontFamily: "comfortaa",
                    fontWeight: "100",
                    lineHeight: "100px",
                    /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */
                  }}
                >
                  t
                </Typography>
              </AnimatedOnScroll>

              <AnimatedOnScroll
                animationIn="fadeIn"
                animationInDuration={100}
                animationInDelay={1100}
              >
                <Typography
                  color="primary"
                  display="inline"
                  sx={{
                    fontSize: "115px",
                    fontFamily: "comfortaa",
                    mb: 2,
                    fontWeight: "100",
                    lineHeight: "100px",
                    /*    "&:hover": {
                  transform: "scale(1.1)",
                }, */
                  }}
                >
                  .
                </Typography>
              </AnimatedOnScroll>
            </Box>
            <Box sx={{ mt: 2 }}>
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
            </Box>
            {/* <Box sx={{ mt: 1 }}>
              <Button variant="text">skapa konto</Button>
              <Button variant="outlined">logga in</Button>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroSection;
