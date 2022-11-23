import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function HowIactWorks() {
  return (
    <>
      <Box sx={{ textAlign: "left", mt: 15, px: 3 }}>
        <Grid2 container>
          <Grid2 xs={12} sm={3}></Grid2>

          <Grid2 xs={12} sm={6}>
            <Typography variant="h4">Så här fungerar i-act</Typography>
          </Grid2>

          <Grid2 xs={12} sm={3}></Grid2>
        </Grid2>

        <Grid2 container spacing={0} sx={{ mt: 4 }}>
          <Grid2 xs={12} sm={3}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={500}
              animationInDelay={10}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "50",
                  fontFamily: "comfortaa",
                  textAlign: "right",
                  mr: 2,
                  justifyContent: "center",
                  color: "customBlack.light",
                }}
              >
                1
              </Typography>{" "}
            </AnimatedOnScroll>
          </Grid2>

          <Grid2 xs={12} sm={6}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={500}
            >
              <Typography variant="body" sx={{ justifyContent: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </AnimatedOnScroll>
          </Grid2>

          <Grid2 xs={12} sm={3}></Grid2>
        </Grid2>

        <Grid2 container spacing={0} sx={{ mt: 4 }}>
          <Grid2 xs={12} sm={3}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={10}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "50",
                  fontFamily: "comfortaa",
                  textAlign: "right",
                  mr: 2,
                  justifyContent: "center",
                  color: "customBlack.light",
                }}
              >
                2
              </Typography>
            </AnimatedOnScroll>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={500}
            >
              <Typography variant="body" sx={{ justifyContent: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </AnimatedOnScroll>
          </Grid2>

          <Grid2 xs={12} sm={3}></Grid2>
        </Grid2>

        <Grid2 container spacing={0} sx={{ mt: 4 }}>
          <Grid2 xs={12} sm={3}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={10}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "50",
                  fontFamily: "comfortaa",
                  textAlign: "right",
                  mr: 2,
                  justifyContent: "center",
                  color: "customBlack.light",
                }}
              >
                3
              </Typography>{" "}
            </AnimatedOnScroll>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={500}
            >
              <Typography variant="body" sx={{ justifyContent: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </AnimatedOnScroll>
          </Grid2>

          <Grid2 xs={12} sm={3}></Grid2>
        </Grid2>

        <Grid2 container spacing={0} sx={{ mt: 4, mb: 4 }}>
          <Grid2 xs={12} sm={3}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={10}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  fontWeight: "50",
                  fontFamily: "comfortaa",
                  textAlign: "right",
                  mr: 2,
                  justifyContent: "center",
                  color: "customBlack.light",
                }}
              >
                4
              </Typography>
            </AnimatedOnScroll>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <AnimatedOnScroll
              animationIn="fadeIn"
              animationInDuration={1000}
              animationInDelay={500}
            >
              <Typography variant="body" sx={{ justifyContent: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </AnimatedOnScroll>
          </Grid2>

          <Grid2 xs={12} sm={3}></Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default HowIactWorks;
