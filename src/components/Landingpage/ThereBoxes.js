import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { Button, Paper, Slide, Typography } from "@mui/material";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function ThereBoxes() {
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          margin: "auto",
          width: "100%",
          px: 0,
          mx: 0,
          mb: 10,
        }}
      >
        <Grid xs={12} sm={6}>
          <AnimatedOnScroll animationIn="slideInLeft" animationInDuration={600}>
            <Box
              sx={{
                backgroundColor: "#ffff",
                p: 6,
                borderRadius: "18px 0px  0px 18px ",
              }}
            >
              <Typography variant="h5">Skattningar</Typography>
              <Typography variant="body1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ."{" "}
              </Typography>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button variant="outlined"> se våra skattningar </Button>
              </Box>
            </Box>
          </AnimatedOnScroll>
        </Grid>

        <Grid xs={12} sm={6}>
          <AnimatedOnScroll
            animationIn="slideInRight"
            animationInDuration={600}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "#fefefe",
                p: 6,
                borderRadius: "0px 18px 18px 0px ",
              }}
            >
              <Typography variant="h5">Hemuppgifter</Typography>
              <Typography variant="body1">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ."
              </Typography>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{ color: "#ffff", borderColor: "#ffff" }}
                >
                  se våra hemuppgifter
                </Button>
              </Box>
            </Box>
          </AnimatedOnScroll>
        </Grid>
      </Grid>
    </>
  );
}

export default ThereBoxes;
